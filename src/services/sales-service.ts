import saleRepository from "../repositories/sales-repository"

async function createSale(id: number, customer: string) {
    saleRepository.updateStock(id)
    const result = await saleRepository.addSale(id, customer)
    return result;
}

async function getSales(){
    const result = await saleRepository.getAll()
    return result.rows;
}

async function getSalesRank(){
    const result = await saleRepository.getRank()
    return result.rows;
}

async function deleteOne(id: string | string[]){
    const result = await saleRepository.cancelSale(id)
    return result;
}

const saleService = {
    createSale,
    getSales,
    getSalesRank,
    deleteOne
}

export default saleService;