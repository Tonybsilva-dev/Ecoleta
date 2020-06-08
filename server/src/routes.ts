import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';


import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

//Pegar uma lista de itens
routes.get('/items', itemsController.index);

//Criar um ponto de coleta
routes.post('/points', upload.single('image'), pointsController.create); 
routes.get('/points', pointsController.index); 
//Listar ponto de forma individual
routes.get('/points/:id', pointsController.show);




  

export default routes;