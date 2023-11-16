import express  from "express";
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js"

const app = express()

app.use(express.json())


app.use('/api', employeesRoutes)
app.use('/api', indexRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: "Endpoint no encontrado"
    })
})

export default app;