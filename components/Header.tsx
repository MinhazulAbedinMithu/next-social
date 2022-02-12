import Image from "next/image";
import {
	MdSearch,
	MdHome,
	MdVideoLibrary,
	MdGroups,
	MdShop2,
	MdNotificationsNone,
	MdOutlineSettings,
} from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import Logo from "../images/logo.png";
import HeaderIcon from "./HeaderIcon";

const Header = () => {
	const isLogged = true;
	return (
		<div className="flex sticky top-0 z-60 bg-white items-center shadow-md justify-between">
			{/* left */}
			<div>
				<Image src={Logo} alt="Logo" />
			</div>
			{/* center */}
			<div className="flex items-center justify-center flex-grow">
				<HeaderIcon active Icon={MdHome} />
				<HeaderIcon Icon={MdVideoLibrary} />
				<HeaderIcon Icon={MdGroups} />
				<HeaderIcon Icon={MdShop2} />
			</div>
			{/* right */}
			<div className="flex items-center justify-center">
				<div className="flex items-center ml-2 rounded-full bg-gray-100 p-2">
					<MdSearch className="h-6 text-gray-600 text-4xl" />
					<input
						className="bg-transparent text-xl"
						type="text"
						name="search"
						id="search"
						placeholder="searching..."
					/>
				</div>
				<div className="flex items-center justify-center">
					{isLogged ? (
						<div className="flex items-center justify-center">
							<MdNotificationsNone className="text-3xl text-yellow-500 mx-2" />
							<AiOutlineMessage className="text-3xl text-green-500 mx-2" />
							<MdOutlineSettings className="text-3xl text-purple-800 mx-2" />
							<FaUserAlt className="text-5xl border-2 border-emerald-500 p-1 rounded-full text-indigo-700" />
						</div>
					) : (
						<div className="flex items-center justify-center">
							<button className="text-xl font-medium bg-sky-900 text-white px-5 py-1 rounded-full mx-2">
								Login
							</button>
							<button className="text-xl font-medium bg-fuchsia-900 text-white px-5 py-1 rounded-full mx-2">
								Register
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
