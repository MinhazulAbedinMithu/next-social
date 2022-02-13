import { Account, NewFeeds, QuickPages } from "../utilities";

const Sidebar = () => {
	return (
		<div className="w-1/5 px-4 py-5 bg-gray-100">
			<NewFeeds />
			<QuickPages />
			<Account />
		</div>
	);
};

export default Sidebar;
