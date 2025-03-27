import express from 'express';
import taskRouter from './routes/tasks';
import handleError from './middlewares/handleError';

const app = express();

app.use(express.json());
app.use('/tasks', taskRouter);
app.use(handleError);

app.get('/', (req, res) => {
  res.send('Task Management!')
});

export default app;