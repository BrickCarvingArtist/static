import express from "express";
import bodyParser from "body-parser";
import upload from "./upload";
const port = 2000,
	app = express();
app.use(bodyParser.urlencoded({
	extended : 1
}));
app.use(express.static(`${__dirname}/resource`));
app.use(express.static(`${__dirname}/upload`));
app.post("/upload", (req, res) => {
	upload(req, res, path => {
		res.json({
			code : 0,
			data : {
				path
			},
			message : "mission success"
		});
	});
});
app.listen(port);
console.log(`Server started on port ${port}`);