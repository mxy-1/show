require("dotenv").config()

const express = require("express")
const usersRouter = require("./routes/users")

const app = express()

app.use("/api/users", usersRouter)

app.listen(process.env.PORT, () => {
    console.log("listening on port", process.env.PORT)
})