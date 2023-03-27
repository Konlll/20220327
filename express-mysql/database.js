import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

// package.json-be kell a "type": "module", hogy lehessen import/exportot használni

export const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export const getNotes = async () => {
    // Ha ilyen [] közé tesszük, akkor az első elemet veszi ki a tömbből, ami itt a konkrét lekérdezés eredményei
    const [rows] = await pool.query("SELECT * FROM notes")
    return rows
}

export const getNote = async (id) => {
    const [rows] = await pool.query("SELECT * FROM notes WHERE id = ?", [id])
    return rows[0]
}

export const createNote = async (title, contents) => {
    await pool.query(`INSERT INTO notes(title, contents) VALUES(?,?)`, [title, contents])
}