const express = require('express');
const userRoutes = require('./routes');
const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/v1/users", userRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));