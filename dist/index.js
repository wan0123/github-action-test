import express from "express";
//#region src/ts/index.ts
var app = express();
var port = 3e3;
app.get("/", (_req, res) => {
	res.send("hello world66");
});
app.listen(port, () => {
	console.log(`Server listening on http://localhost:${port}`);
});
//#endregion
export {};

//# sourceMappingURL=index.js.map