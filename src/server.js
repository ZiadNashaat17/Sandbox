import { connect } from "mongoose";
import app from "./app.js";

const port = process.env.PORT;
const DB = process.env.DATABASE;

try {
	await connect(DB);
	console.log("Connected to DB!");

	app.listen(port, () => {
		console.log(`Sandbox app running on port: ${port}`);
	});
} catch (error) {
	console.log("App startup error: ", error);
	process.exit(1);
}
