import React from "react";

const login = () => {
	return (
		<div className="w-full h-full">
			<form
				className="w-2/6 mx-auto mt-10 p-10 bg-green-200 rounded drop-shadow-2xl flex items-center flex-col gap-2"
				method="POST"
				action="/api/login"
			>
        <h2 className="text-3xl font-bold pb-5">Login</h2>
				<input
					className="border border-gray-400 hover:border-purple-600 rounded p-1 text-l"
					type="text"
					name="username"
					id="username"
					placeholder="username"
				/>
				<input
					className="border border-gray-400 hover:border-purple-600 rounded p-1 text-l"
					type="password"
					name="password"
					id="password"
					placeholder="password"
				/>
				<input className="bg-purple-700 text-white font-bold px-5 py-2 rounded-lg cursor-pointer hover:bg-transparent border-2 border-transparent hover:border-purple-300 hover:text-purple-600 shadow-lg" type="submit" value="Login" />
			</form>
		</div>
	);
};

export default login;
