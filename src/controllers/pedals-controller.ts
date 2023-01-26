import { Request, Response } from "express";
import Pedal from "../protocols/pedal.js";
import pedalService from "../services/pedal-service.js";

async function getPedals(req: Request, res: Response){

    const pedals = await pedalService.getAllPedals()
    res.status(200).send(pedals)
}

async function getOne(req: Request, res: Response){
    const id = parseInt(req.params.id)

    const pedal = await pedalService.getOnePedal(id)
    res.status(200).send(pedal)
}

async function postPedal(req: Request, res: Response){
    const newPedal = req.body as Pedal
    const { quantity } = req.body

    const result = await pedalService.createPedal(newPedal, quantity)
    res.status(201).send(`Pedal inserted ${result}`)
}

export {
    getPedals,
    getOne,
    postPedal
}