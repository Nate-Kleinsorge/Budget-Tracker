const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3002;
const BUILD_PATH = path.resolve("../client/build");

app.use(express.static(BUILD_PATH))

app.get("/ping", (req, res) => {
    res.send("pong");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})