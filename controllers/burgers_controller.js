const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.select(function(data) {
        let hbsObject = {
            burger: data
        };
        res.render("index", hbsObject);
    })
});

router.post("/api/burger", (req, res) => {
    let newBurger = req.body.name;

    burger.create(newBurger, (result) => {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    })
});

router.put("/api/burger/:id", (req, res) => {
    let status = Boolean(req.body.devoured);
    console.log(status);
    var condition = "id = " + req.params.id;
    burger.update({"devoured": status}, condition, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;
