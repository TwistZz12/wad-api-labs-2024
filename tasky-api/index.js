import express from 'express';
import taskRoutes from './api/tasks/index.js';
import dotenv from 'dotenv';
import './db';
import usersRouter from './api/users';

dotenv.config();

const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍. Here's the details: ${err.stack} `);
};

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use('/api/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

app.use(errHandler);

app.use('/api/users', usersRouter);
