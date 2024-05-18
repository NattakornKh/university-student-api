import { Router, Request, Response } from 'express';
import { sql, createClient } from '@vercel/postgres';
import { Student, UniversityData } from '../models/student';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        console.log('Fetching students data...');
        const data = await sql<Student>`SELECT * FROM students_tab`;

        res.json(data.rows);
    } catch (error:any) {
        console.error('Database Error:', error);
        return res.status(500).json({ message: error.detail })
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    const studentId = parseInt(req.params.id); 
    try {
        console.log('Fetching student data from id...');

        const student = await sql<Student>`
            SELECT * FROM students_tab WHERE student_id = ${studentId}
        `;

        const universities = await sql<UniversityData>`
            SELECT university_id, university_code AS code, university AS name, degree  
            FROM universities_students WHERE student_id = ${studentId}
        `;

        if (student.rowCount === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }

        const result = {
            student_id: student.rows[0].student_id,
            prefix: student.rows[0].prefix,
            first_name: student.rows[0].first_name,
            last_name: student.rows[0].last_name,
            universities: universities.rows.map(row => ({
                university_id: row.university_id,
                code: row.code,
                name: row.name,
                degree: row.degree
            }))
        };

        res.json(result);
    } catch (error:any) {
        console.error('Database Error:', error);
        return res.status(500).json({ message: error.detail })
    }
});

router.post('/', async (req: Request, res: Response) => {
    const newStudent: Student = req.body;
    const client = createClient();
    await client.connect();

    const sql = `
        INSERT INTO students_tab (student_id, prefix, first_name, last_name)
        VALUES ($1, $2, $3, $4);
    `;
    const values = [newStudent.student_id, newStudent.prefix, newStudent.first_name, newStudent.last_name];

    try {
        console.log('Inserting student data...');

        await client.query(sql, values);
        res.status(201).json({ message: 'Student inserted successfully' });
    } catch (error:any) {
        console.error('Database Error:', error);
        res.status(500).json({ message: error.detail })
    } finally {
        await client.end();
    }
});

router.put('/:id', async (req: Request, res: Response) => {
    const studentId = parseInt(req.params.id);
    const { prefix, first_name, last_name } = req.body;

    if (!prefix || !first_name || !last_name) {
        return res.status(400).json({ message: 'prefix, first_name, and last_name are required' });
    }

    const client = createClient();
    await client.connect();

    const sql = `
        UPDATE students_tab
        SET prefix = $1, first_name = $2, last_name = $3
        WHERE student_id = $4
        RETURNING *;
    `;
    const values = [prefix, first_name, last_name, studentId];

    try {
        console.log('Updating student data...');

        const result = await client.query(sql, values);

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.json({ message: 'Student update successfully', data: result.rows[0] });
    } catch (error:any) {
        console.error('Database Error:', error);
        res.status(500).json({ message: error.detail });
    } finally {
        await client.end();
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    const studentId = parseInt(req.params.id);

    const client = createClient();
    await client.connect();

    const sql = `
        DELETE FROM students_tab
        WHERE student_id = $1
        RETURNING *;
    `;
    const values = [studentId];

    try {
        console.log('Deleting student data...');

        const result = await client.query(sql, values);

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.json({ message: 'Student deleted successfully' });
    } catch (error:any) {
        console.error('Database Error:', error);
        res.status(500).json({ message: error.detail });
    } finally {
        await client.end();
    }
});

export default router;