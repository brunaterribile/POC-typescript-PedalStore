import { connection } from "../database/database.js";
import Pedal from "../protocols/pedal.js";
import { QueryResult } from "pg";

async function getAll(): Promise<QueryResult<any>>{
    return connection.query(
        `SELECT * FROM pedals`
    );
}

async function addPedal(pedal: Pedal): Promise<QueryResult>{
    return connection.query(
        `INSERT INTO pedals (model, brand, value, is_avaiable) 
        VALUES ($1, $2, $3, $4)
        RETURNING id`,
        [pedal.model, pedal.brand, pedal.value, true]
    );
}


const pedalRepository = {
    getAll,
    addPedal
}

export default pedalRepository;