import express from 'express';
import { getPedals, postPedal } from './controllers/pedals-controller.js'

const server = express();
server.use(express.json())

server.get('/pedals', getPedals)
server.post('/pedals', postPedal)


server.listen(4000, () => { console.log('Running...')})