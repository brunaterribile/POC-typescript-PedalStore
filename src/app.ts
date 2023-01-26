import express from 'express';
import { getOne, getPedals, postPedal } from './controllers/pedals-controller.js'
import { postSale, getAllSales, getRanking, deleteSale } from './controllers/sales-controller.js';
import validatePedal from './middlewares/validate-pedal-schema.js';
import { PedalSchema } from './schemas/pedal-schema.js';

const server = express();
server.use(express.json())

server.post('/pedals', validatePedal(PedalSchema), postPedal)
server.get('/pedals', getPedals)
server.get('/pedals/:id', getOne)

server.post('/sales/:id', postSale)
server.get('/sales', getAllSales)
server.delete('/sales', deleteSale)
server.get('/sales/ranking', getRanking)

server.listen(4000, () => { console.log('Running...')})