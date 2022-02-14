import { connect } from "mongoose";

const conn = {
	isConnected: false,
};

export const dbConnect = async () => {
	if (conn.isConnected) return;

	const db = await connect(process.env.DATABASE_URL);
};
