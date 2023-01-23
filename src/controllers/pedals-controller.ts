import { Request, Response } from "express";
import Pedal from "../protocols/pedal.js";
import pedalRepository from "../repositories/pedals-repository.js";
import { PedalSchema } from "../schemas/pedal-schema.js";

async function getPedals(req: Request, res: Response){

    const result = await pedalRepository.getAll()
    res.status(200).send(result.rows)
}

async function postPedal(req: Request, res: Response){
    const newPedal = req.body as Pedal

    const { error } = PedalSchema.validate(newPedal);
    if (error){
        return res.status(400).send({
            message: error.message
        })
    }

    const result = await pedalRepository.addPedal(newPedal)
    return res.status(201).send(`Pedal inserted ${result.rowCount}`)
}

export {
    getPedals,
    postPedal
}