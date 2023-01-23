import pkg from 'pg';
const { Pool } = pkg;

const connection = new Pool ({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'driven2022',
    database: 'pedalstore'
})

export { connection };