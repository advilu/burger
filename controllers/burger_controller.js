let express = require("express");
let burger = require("./../models/burger.js");

const router = express.Router();

//get route logic for home page
router.get("/", (req, res) => {
    res.redirect("/burgers");
});

router.get("/burgers", (req, res) => {
    burger.all(data => {
        console.log(data);
        const burgerData = {
            burgers: data
        };
        res.render("index", burgerData);        
    });
});

//post route for home page
router.post("/burgers/new", (req, res) => {
    burger.create([
        "burger_name", "devoured"
    ], [
            req.body.burger_name, req.body.devoured
        ], [result => {
            console.log(result.insertId);
            res.json({ id: result.insertId }); //check insertId
        }]);
});

//put route for home page
router.put("/burgers/:id", (req, res) => {
    let status = `id = ${req.params.id}`;
    console.log("status", status);

    burger.update({
        devoured: req.body.devoured
    }, status, result => {
        if (result.changedRows == 0) {
            res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//delete route 
router.delete("/api/burgers/:id", (req, res) => {
    let status = `id = ${req.params.id}`;

    burger.delete(
        status, result => {
            if (result.affectedRows == 0) {
                res.staus(404).end();
            } else {
                res.status(200).end();
            }
        });
});

module.exports = router;