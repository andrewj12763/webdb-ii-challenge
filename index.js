const express = require("express");
const carRoutes = require("./routes/cars");
const app = express();

app.use(express.json());

app.use("/api/cars", carRoutes);

app.get('/', (req, res) => {
    res.send({ message: "Welcome!!!" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on localhost:${port}`));