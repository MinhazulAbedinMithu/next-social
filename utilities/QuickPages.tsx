import NewFeedsItem from "./NewFeedsItem";
import {FaBlogger} from "react-icons/fa";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {MdWork, MdSchool} from "react-icons/md";

const QuickPages = () => {
	return (
		<div className="bg-green-100 px-5 my-10  py-5 rounded-lg drop-shadow-xl">
			<h2 className="text-3xl font-bold mb-2 text-purple-700 ">Quick Pages</h2>

      <NewFeedsItem Icon={FaBlogger} title="Blog" />
			<NewFeedsItem Icon={AiOutlineShoppingCart} title="Shop" />
			<NewFeedsItem Icon={MdWork} title="Job" />
			<NewFeedsItem Icon={MdSchool} title="Learning" />
		</div>
	);
};

export default QuickPages;
