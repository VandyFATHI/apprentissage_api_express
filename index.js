import express from "express";
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json()); //ça veut dire qu'on utilser le format json pour toute l'application.

app.use('/users', usersRoutes);

app.get('/', (req, res) => {res.send('Hello from Homepage'); });

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));