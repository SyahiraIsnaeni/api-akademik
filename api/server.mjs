import express from 'express';
import {router} from './routes.mjs';
const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/v1/users", router);

app.listen(port, () => console.log('app listening on port ${port}'));