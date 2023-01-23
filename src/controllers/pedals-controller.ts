import { Request, Response } from "express";
import Pedal from "../protocols/pedal.js";
import pedalRepository from "../repositories/pedals-repository.js";
import { PedalSchema } from "../schemas/pedal-schema.js";
import saleRepository from "../repositories/sales-repository.js"

async function getPedals(req: Request, res: Response){

    const result = await pedalRepository.getAll()
    res.status(200).send(result.rows)
}

async function getOne(req: Request, res: Response){
    const { id } = req.params

    const result = await pedalRepository.getById(id)
    res.status(200).send(result.rows)
}

async function postPedal(req: Request, res: Response){
    const newPedal = req.body as Pedal
    const { quantity } = req.body

    const { error } = PedalSchema.validate(newPedal);
    if (error){
        return res.status(400).send({
            message: error.message
        })
    }

    const result = await pedalRepository.addPedal(newPedal)
    res.status(201).send(`Pedal inserted ${result.rowCount}`)
    const { id } = result.rows[0]
    const inventory = saleRepository.addStock(id, quantity)
}

export {
    getPedals,
    getOne,
    postPedal
}