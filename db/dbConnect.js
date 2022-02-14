import mongoose from "mongoose";

async function dbConnect() {
	try {
		MONGO_URL = process.env.MONGO_URL;

		await mongoose.connect(MONGO_URL, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
		console.log("Database Connected");
	} catch (err) {
		console.log(err.message);
	}
}
export default dbConnect;
