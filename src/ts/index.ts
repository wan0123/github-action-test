import express from "express";

const app = express();
const port = 3000;

app.get("/", (_req, res) => {
    res.send("hello world66");
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
