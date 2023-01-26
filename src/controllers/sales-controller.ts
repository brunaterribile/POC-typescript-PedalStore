import { Request, Response } from "express";
import saleService from "../services/sales-service.js";

async function postSale(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    const { customer } =  req.body

    const result = await saleService.createSale(id, customer)
    res.status(201).send(`Sale inserted ${result.rowCount}`)
}

async function getAllSales(req: Request, res: Response) {
    const sales = await saleService.getSales()
    res.status(200).send(sales)
}

async function getRanking(req: Request, res: Response) {
    const rank = await saleService.getSalesRank()
    res.status(200).send(rank)
}

async function deleteSale(req: Request, res: Response) {
    const { id } = req.headers

    const result = await saleService.deleteOne(id)
    res.status(200).send(`Sale deleted ${result.rowCount}`)
}

export {
    postSale,
    getAllSales,
    getRanking,
    deleteSale
}