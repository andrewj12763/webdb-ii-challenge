const { Router } = require("express");
const Car = require("../models/Car");

const router = new Router();

router.get("/", async (req, res) => {
    try {
        const cars = await Car.get();
        res.status(200).json({ data: cars });
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const count = await Car.update(id, req.body);
        res.status(200).json({ data: count });
    } catch (error) {
        res.status(500).json({ error: "Failed to update car" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const count = await Car.remove(id);
        res.status(200).json({ data: count });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete car" });
    }
});

module.exports = router;