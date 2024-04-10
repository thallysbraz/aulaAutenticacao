const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

app.get("/", async (request, response) => {

})

app.post("/", async (request, response) => {

})

app.listen(port, () => {
    console.log(`servidor iniciado na porta ${port}`);
});