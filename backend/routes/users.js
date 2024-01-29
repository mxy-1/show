const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
    res.send({msg: "GET all users"})
})

router.get("/:id", (req, res) => {
    res.send({msg: "GET single user"})
})

router.get("/:id/shows", (req, res) => {
    res.send({msg: "GET all single user shows"})
})

router.post("/:id/shows", (req, res) => {
    res.send({msg: "POST single user show"})
})

router.delete("/:id/shows/:show_id", (req, res) => {
    res.send({msg: "delete user's show"})
})

module.exports = router 