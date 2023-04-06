import { connection } from "../database/database.js";
import { QueryResult } from "pg";
import SaleEntity from "../protocols/Sale.js";

async function getAll(): Promise<QueryResult<SaleEntity>>{
    return connection.query(
        `SELECT * FROM sales`
    );
}

async function addSale(id: number, customer: string): Promise<QueryResult>{
    return connection.query(
        `INSERT INTO sales (pedal_id, customer) 
        VALUES ($1, $2)`,
        [id, customer]
    );
}

async function getRank(): Promise<QueryResult>{
    return connection.query(
        `SELECT p.brand, p.model, 
        COUNT(s.pedal_id) as "Total Sales", 
        SUM(p.value) as "Total USD" 
        FROM pedals AS p
        JOIN sales AS s
        ON p.id = s.pedal_id
        GROUP BY p.id
        ORDER BY "Total Sales" DESC;`
    );
}

async function addStock(id: number, quantity: number): Promise<QueryResult>{
    return connection.query(
        `INSERT INTO stock (pedal_id, quantity)
        VALUES ($1, $2)`,
        [id, quantity]
    )
}

async function updateStock(id: number): Promise<QueryResult>{
    return connection.query(
        `UPDATE stock SET quantity = quantity -1
        WHERE pedal_id = $1`,
        [id]
    )
}

async function cancelSale(id: string | string[]): Promise<QueryResult>{
    return connection.query(
        `DELETE FROM sales
        WHERE id = $1`,
        [id]
    )
}

const saleRepository = {
    getAll,
    addSale,
    getRank,
    addStock,
    updateStock,
    cancelSale
}

export default saleRepository;