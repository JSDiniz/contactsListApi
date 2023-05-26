import express from "express"
import "express-async-errors"
import cors from "cors"
import handleError from "./errors/handleError"
import userRouter from "./routes/users/users.routes"

const app = express()
app.use(cors())
app.use(express.json())

app.use("/users", userRouter)


app.use(handleError)


export default app