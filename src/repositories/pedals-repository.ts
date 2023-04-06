import { connection } from "../database/database.js";
import { QueryResult } from "pg";
import { Pedal, PedalEntity } from "../protocols/Pedal.js";

async function getAll(): Promise<QueryResult<PedalEntity>>{
    return connection.query(
        `SELECT * FROM pedals`
    );
}

async function getById(id: number): Promise<QueryResult<PedalEntity>>{
    return connection.query(
        `SELECT * FROM pedals
        WHERE id = $1`,
        [id]
    );
}

async function addPedal(pedal: Pedal): Promise<QueryResult>{
    return connection.query(
        `INSERT INTO pedals (model, brand, value) 
        VALUES ($1, $2, $3)
        RETURNING id`,
        [pedal.model, pedal.brand, pedal.value]
    );
}


const pedalRepository = {
    getAll,
    getById,
    addPedal
}

export default pedalRepository;