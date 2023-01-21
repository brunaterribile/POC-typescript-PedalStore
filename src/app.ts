import express from 'express';
import { getPedals } from './controllers/pedals-controller.js'

const server = express();

server.get('/pedals', getPedals)


server.listen(4000, () => { console.log('Running...')})