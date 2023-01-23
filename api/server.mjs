import express from 'express';
import usersRoutes from './routes.mjs';
const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/v1/users", usersRoutes);

app.listen(port, () => console.log('app listening on port ${port}'));