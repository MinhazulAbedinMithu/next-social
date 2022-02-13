import { CgFeed } from "react-icons/cg";
import { GiThreeFriends } from "react-icons/gi";
import { RiProfileFill, RiPagesFill } from "react-icons/ri";
import { MdOutlineFavorite } from "react-icons/md";
import NewFeedsItem from "./NewFeedsItem";

const NewFeeds = () => {
	return (
		<div className="w-full bg-red-400">
			<h2 className="text-3xl text-red-400	">New Feeds</h2>
			<NewFeedsItem Icon={CgFeed} title="New Feeds" />
			<NewFeedsItem Icon={RiProfileFill} title="Profile" />
			<NewFeedsItem Icon={GiThreeFriends} title="Friends" />
			<NewFeedsItem Icon={MdOutlineFavorite} title="Favorites" />
			<NewFeedsItem Icon={RiPagesFill} title="Pages" />
		</div>
	);
};

export default NewFeeds;
