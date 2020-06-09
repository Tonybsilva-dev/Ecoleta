import express from 'express'
import routes from './routes';
import path from 'path';
import cors from 'cors';
import { errors } from 'celebrate';


const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);




//função para puxar de forma estática elementos de um diretório específico
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(errors());

app.listen(3333);