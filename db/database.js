import pgPromise from "pg-promise";
const pgp = pgPromise();
const user = "postgres";
const password = "Tasks";
const dbname = "TasksBackend";
const host = "localhost";
const port = 5433;
export const db = pgp(`postgres://${user}:${password}@${host}:${port}/${dbname}`);
