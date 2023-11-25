import connectingDB from "./config/database"
import cors from "cors"
import express, { Router } from "express"
import { routes } from "./src/routes"


const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)

connectingDB()

const port = 3000
app.listen(port, () => console.log(`Escutando na porta: ${port}`))
