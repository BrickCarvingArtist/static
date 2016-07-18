import express from "express";
import bodyParser from "body-parser";
const port = 2000,
	app = express();
app.use(bodyParser.urlencoded({
	extended : 1
}));
app.use(express.static(`${__dirname}/resource`, {
	index : 0,
	maxAge : 600000
}));
app.listen(port);
console.log(`Server started on port ${port}`);