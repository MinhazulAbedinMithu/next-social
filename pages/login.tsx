import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

interface ISubmitState {
	username: string;
	password: string;
}

const login: NextPage<ISubmitState> = () => {
	const [username, setUsername] = useState<string>("");
	// const [username, setUsername] = useState<string>("");

	return (
		<div className="w-full h-full">
			<div className="w-2/6 mx-auto mt-10 p-10 bg-green-100 rounded-lg drop-shadow-xl ">
				<h2 className="text-3xl font-bold pb-5 text-center">Login</h2>
				<form
					className="flex items-center flex-col gap-5"
					method="POST"
					action="/api/login"
				>
					<input
						className="border border-gray-400 hover:border-purple-600 rounded p-2 text-xl"
						type="text"
						name="username"
						id="username"
						placeholder="username"
						onChange={(e) => setUsername(e.target.value)}
					/>
					<input
						className="border border-gray-400 hover:border-purple-600 rounded p-2 text-xl"
						type="password"
						name="password"
						id="password"
						placeholder="password"
					/>
					<input
						className="bg-purple-700 text-white text-2xl font-bold px-5 py-2 rounded-lg cursor-pointer hover:bg-transparent border-2 border-transparent hover:border-purple-300 hover:text-purple-600 shadow-lg"
						type="submit"
						value="Login"
					/>
				</form>

				<div className="flex items-center justify-center mt-10">
					<div className="text-3xl font-bold pr-10 text-indigo-700">
						Continue with:{" "}
					</div>
					<div className="flex items-center justify-start gap-5 text-4xl">
						<FaGithub className="text-black cursor-pointer" /> |
						<FaGoogle className="text-green-500 cursor-pointer" /> |
						<FaFacebook className="text-blue-600 cursor-pointer" />
					</div>
				</div>
				<div className="font-light text-xl text-center mt-5">
					Not Registered? please visit{" "}
					<Link href="/register">
						<a className="font-bold text-purple-900">Register</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default login;
