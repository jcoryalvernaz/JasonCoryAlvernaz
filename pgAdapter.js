require("dotenv").config({ path: "variables.env" });
const pgp = require("pg-promise")({});

const isProduction = process.env.NODE_ENV === "production";

const connectionString = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`;

const db = pgp(isProduction ? process.env.DATABASE_URL : connectionString);

exports.db = db;
