import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import routes from "./routes";

const app = express()

app.use(bodyParser.json())
app.use(routes)
createConnection()


app.listen(3333 , () => {
    console.log("Servidor Backend ON!!!")
})
