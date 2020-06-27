import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const PORT = 3333;
const HOST = "0.0.0.0";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

//Porta do server
app.listen(PORT, HOST);