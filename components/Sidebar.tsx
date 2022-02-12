import { Account, NewFeeds, QuickPages } from "../utility";

const Sidebar = () => {
	return (
		<div className="w-2/12 bg-gray-300">
			<NewFeeds />
			<QuickPages />
			<Account />
		</div>
	);
};

export default Sidebar;
