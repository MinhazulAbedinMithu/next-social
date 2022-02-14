import { CgFeed } from "react-icons/cg";
import { GiThreeFriends } from "react-icons/gi";
import { RiProfileFill, RiPagesFill } from "react-icons/ri";
import { MdOutlineFavorite } from "react-icons/md";
import NewFeedsItem from "./NewFeedsItem";

const NewFeeds = () => {
	return (
		<div className="">
			<h2 className="text-2xl font-bold mb-2 text-blue-400">News Feeds</h2>
			<NewFeedsItem Icon={CgFeed} title="New Feeds" />
			<NewFeedsItem Icon={RiProfileFill} title="Profile" />
			<NewFeedsItem Icon={GiThreeFriends} title="Friends" />
			<NewFeedsItem Icon={MdOutlineFavorite} title="Favorites" />
			<NewFeedsItem Icon={RiPagesFill} title="Pages" />
		</div>
	);
};

export default NewFeeds;
