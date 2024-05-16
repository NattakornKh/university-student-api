import express from 'express';
import bodyParser from 'body-parser';
import universityRoutes from './routes/university';
import studentRoutes from './routes/student';

const app = express();
app.use(bodyParser.json());

app.use('/universities', universityRoutes);
app.use('/students', studentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
