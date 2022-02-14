/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		DATABASE_URL:
			"mongodb+srv://root:toor@cluster0.zolqe.mongodb.net/next-social?retryWrites=true&w=majority",
	},
};

module.exports = nextConfig;
