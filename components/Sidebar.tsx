import { Account, NewFeeds, QuickPages } from "../utilities";

const Sidebar = () => {
	return (
		<div className="w-1/5 px-4 py-5 h-screen bg-gray-100 md:block hidden">
			<NewFeeds />
			<QuickPages />
			<Account />
		</div>
	);
};

export default Sidebar;
