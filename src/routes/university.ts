import { Router, Request, Response } from 'express';
import { University } from '../models/university';
import { universities } from '../lib/data';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json(universities);
});

router.get('/:id', (req: Request, res: Response) => {
    const university = universities.find((u:University) => u.university_id === parseInt(req.params.id));
    if (!university) {
        return res.status(404).json({ message: 'University not found' });
    }
    res.json(university);
});

router.post('/', (req: Request, res: Response) => {
    const newUniversity: University = req.body;
    universities.push(newUniversity);
    res.status(201).json(newUniversity);
});

router.put('/:id', (req: Request, res: Response) => {
    const university = universities.find((u:University) => u.university_id === parseInt(req.params.id));
    if (!university) {
        return res.status(404).json({ message: 'University not found' });
    }
    university.name = req.body.name;
    university.code = req.body.code;
    res.json(university);
});

router.delete('/:id', (req: Request, res: Response) => {
    const universityIndex = universities.findIndex((u:University) => u.university_id === parseInt(req.params.id));
    if (universityIndex === -1) {
        return res.status(404).json({ message: 'University not found' });
    }
    universities.splice(universityIndex, 1);
    res.json({ message: 'University deleted successfully' });
});

export default router;
