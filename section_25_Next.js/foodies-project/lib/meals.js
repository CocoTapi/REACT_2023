import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals(){
    // for simulation purpose
    await new Promise((resolve) => setTimeout(resolve, 5000))

    return db.prepare('SELECT * FROM meals').all();

    //".run() is for inserting data, changing data"
    //".all() is for fetching all data"
    //".get() is for fetching a single row"
}