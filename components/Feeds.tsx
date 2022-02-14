import Image from "next/image";
import img from "../images/anthony-tran-2F7w4MiVVjo-unsplash.jpg";
import proImg from "../images/park-shin-hye-korean-cutie.png";
import { AiOutlineLike, AiOutlineShareAlt } from "react-icons/ai";
import { BiMessageAlt } from "react-icons/bi";

const Feeds = () => {
	return (
		<div className="container mx-auto">
			<h4>Feeds</h4>
			<div className="rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0">
				<div className="w-full flex justify-between p-3">
					<div className="flex">
						<div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
							<Image src={proImg} alt="profilepic" />
						</div>
						<span className="pt-1 ml-2 font-bold text-sm">braydoncoyer</span>
					</div>
					<span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
						<i className="fas fa-ellipsis-h pt-2 text-lg"></i>
					</span>
				</div>
				<Image className="w-full bg-cover" src={img} alt="Post Image"/>
				<div className="px-3 pb-2">
					<div className="pt-1">
						<div className="mb-2 text-sm border-b">
							Lord of the Rings is my favorite film-series. One day I will make
							my way to New Zealand to visit the Hobbiton set!
						</div>
					</div>
					<div className="grid grid-cols-3 border-b">
						<div className="grid grid-cols-2 divide-x text-sm mb-2 text-gray-400 cursor-pointer font-medium w-100">
							<button className="flex items-center">
								<AiOutlineLike /> Like
							</button>
							<button>12</button>
						</div>
						<div className="grid grid-cols-2 divide-x text-sm mb-2 text-gray-400 cursor-pointer font-medium w-100">
							<button className="flex items-center">
								<BiMessageAlt /> Comment
							</button>
							<button>24</button>
						</div>
						<div className="grid grid-cols-2 divide-x text-sm mb-2 text-gray-400 cursor-pointer font-medium w-100">
							<button className="flex items-center">
								<AiOutlineShareAlt /> Share
							</button>
							<button>3</button>
						</div>
					</div>
					<div className="mb-2">
						<div className="mb-2 text-sm">
							<span className="font-medium mr-2">razzle_dazzle</span> Dude! How
							cool! I went to New Zealand last summer and had a blast taking the
							tour! So much to see! Make sure you bring a good camera when you
							go!
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Feeds;
