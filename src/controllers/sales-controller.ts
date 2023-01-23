import { Request, Response } from "express";
import saleRepository from "../repositories/sales-repository.js"

async function postSale(req: Request, res: Response) {
    const { id } = req.params
    const { customer } =  req.body

    saleRepository.updateStock(id)
    const result = await saleRepository.addSale(id, customer)
    res.status(201).send(`Sale inserted ${result.rowCount}`)
}

async function getAllSales(req: Request, res: Response) {
    
    const result = await saleRepository.getAll()
    res.status(200).send(result.rows)
}

async function getRanking(req: Request, res: Response) {
    
    const result = await saleRepository.getRank()
    res.status(200).send(result.rows)
}

async function deleteSale(req: Request, res: Response) {
    const { date } = req.headers
    const { customer } =  req.headers

    const result = await saleRepository.cancelSale(customer, date)
    res.status(200).send(`Sale deleted ${result.rowCount}`)
}

export {
    postSale,
    getAllSales,
    getRanking,
    deleteSale
}