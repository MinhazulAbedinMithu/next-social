import { CgFeed } from "react-icons/cg";
import { GiThreeFriends } from "react-icons/gi";
import { RiProfileFill, RiPagesFill } from "react-icons/ri";
import { MdOutlineFavorite } from "react-icons/md";
import NewFeedsItem from "./NewFeedsItem";

const NewFeeds = () => {
	return (
		<div className="bg-yellow-100 px-5 mb-10 py-5 rounded-lg drop-shadow-xl">
			<h2 className="text-3xl font-bold mb-2 text-purple-700 ">News Feeds</h2>
			<NewFeedsItem Icon={CgFeed} title="New Feeds" />
			<NewFeedsItem Icon={RiProfileFill} title="Profile" />
			<NewFeedsItem Icon={GiThreeFriends} title="Friends" />
			<NewFeedsItem Icon={MdOutlineFavorite} title="Favorites" />
			<NewFeedsItem Icon={RiPagesFill} title="Pages" />
		</div>
	);
};

export default NewFeeds;
