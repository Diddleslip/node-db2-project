const express = require("express");
const router = express.Router();
const db = require("../data/dbConnections");

router.get("/", (req, res) => {
    db("cars")
    .then(response => {
        res.status(200).json({ message: response });
    })
    .catch(error => {
        res.status(500).json({ message: error.message });
    })
})

router.post("/", (req, res) => {
    db("cars")
        .insert(req.body)
        .then(ids => {
            db("cars").where({ id: ids[0] })
            .then(response => {
                console.log("Work")
                res.status(201).json({ data: response });
            })
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "Identical VIN found" });
        })
})

router.put("/:VIN", (req, res) => {
    const VIN = req.params.VIN;
    db("cars")
        .where({ VIN })
        .update(req.body)
        .then(response => {
            res.status(200).json({ data: response });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: error.message });
        })
})

router.delete("/:VIN", (req, res) => {
    const VIN = req.params.VIN;
    
    db("cars")
        .where({ VIN })
        .del()
        .then(response => {
            if((0 < response)) {
                res.status(200).json({ data: response });
            } else {
                res.status(404).json({ message: "Record was not found" });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: error.message });
        })
})



module.exports = router;