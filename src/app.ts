import express from 'express';
import { getOne, getPedals, postPedal } from './controllers/pedals-controller.js'
import { postSale, getAllSales, getRanking } from './controllers/sales-controller.js';

const server = express();
server.use(express.json())

server.post('/pedals', postPedal)
server.get('/pedals', getPedals)
server.get('/pedals/:id', getOne)
server.post('/sales/:id', postSale)
server.get('/sales', getAllSales)
server.get('/sales/ranking', getRanking)

server.listen(4000, () => { console.log('Running...')})