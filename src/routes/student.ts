import { Router, Request, Response } from 'express';
import { Student } from '../models/student';
import { students } from '../lib/data';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json(students);
});

router.get('/:id', (req: Request, res: Response) => {
    const student = students.find((s:Student) => s.student_id === parseInt(req.params.id));
    if (!student) {
        return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
});

router.post('/', (req: Request, res: Response) => {
    const newStudent: Student = req.body;
    students.push(newStudent);
    res.status(201).json(newStudent);
});

router.put('/:id', (req: Request, res: Response) => {
    const student = students.find((s:Student) => s.student_id === parseInt(req.params.id));
    if (!student) {
        return res.status(404).json({ message: 'Student not found' });
    }
    student.prefix = req.body.prefix;
    student.first_name = req.body.first_name;
    student.last_name = req.body.last_name;
    res.json(student);
});

router.delete('/:id', (req: Request, res: Response) => {
    const studentIndex = students.findIndex((s:Student) => s.student_id === parseInt(req.params.id));
    if (studentIndex === -1) {
        return res.status(404).json({ message: 'Student not found' });
    }
    students.splice(studentIndex, 1);
    res.json({ message: 'Student deleted successfully' });
});

export default router;
