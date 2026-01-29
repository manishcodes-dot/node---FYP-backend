import express from 'express';
import notesRoutes from './modules/notes/noteroutes.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/notes', notesRoutes);

export default app;
