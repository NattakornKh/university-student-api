import { Router, Request, Response } from 'express';
import { sql, createClient } from '@vercel/postgres';
import { University, StudentData } from '../models/university';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        console.log('Fetching universities data...');
        const data = await sql<University>`SELECT * FROM universities_tab`;

        res.json(data.rows);
    } catch (error:any) {
        console.error('Database Error:', error);
        return res.status(500).json({ message: error.detail })
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    const universityId = parseInt(req.params.id); 
    try {
        console.log('Fetching university data from id...');

        const university = await sql<University>`
            SELECT * FROM universities_tab WHERE university_id = ${universityId}
        `;

        const students = await sql<StudentData>`
            SELECT student_id, prefix, first_name, last_name, degree  
            FROM universities_students WHERE university_id = ${universityId}
        `;

        if (university.rowCount === 0) {
            return res.status(404).json({ message: 'University not found' });
        }

        const result = {
            university_id: university.rows[0].university_id,
            code: university.rows[0].code,
            name: university.rows[0].name,
            students: students.rows.map(row => ({
                student_id: row.student_id,
                prefix: row.prefix,
                first_name: row.first_name,
                last_name: row.last_name,
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
    const newUniversity: University = req.body;
    const client = createClient();
    await client.connect();

    const sql = `
        INSERT INTO universities_tab (university_id, code, name)
        VALUES ($1, $2, $3);
    `;
    const values = [newUniversity.university_id, newUniversity.code, newUniversity.name];

    try {
        console.log('Inserting university data...');

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
    const universityId = parseInt(req.params.id);
    const { code, name } = req.body;

    if (!code || !name) {
        return res.status(400).json({ message: 'university_id, code, name are required' });
    }

    const client = createClient();
    await client.connect();

    const sql = `
        UPDATE universities_tab
        SET code = $1, name = $2
        WHERE university_id = $3
        RETURNING *;
    `;
    const values = [code, name, universityId];

    try {
        console.log('Updating university data...');

        const result = await client.query(sql, values);

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'University not found' });
        }

        res.json({ message: 'University update successfully', data: result.rows[0] });
    } catch (error:any) {
        console.error('Database Error:', error);
        res.status(500).json({ message: error.detail });
    } finally {
        await client.end();
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    const universityId = parseInt(req.params.id);

    const client = createClient();
    await client.connect();

    const sql = `
        DELETE FROM universities_tab
        WHERE university_id = $1
        RETURNING *;
    `;
    const values = [universityId];

    try {
        console.log('Deleting student data...');

        const result = await client.query(sql, values);

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'University not found' });
        }

        res.json({ message: 'University deleted successfully' });
    } catch (error:any) {
        console.error('Database Error:', error);
        res.status(500).json({ message: error.detail });
    } finally {
        await client.end();
    }
});

export default router;