const NewFeedsItem = (props: any) => {
	const { Icon, title } = props;
	return (
		<div>
			<div className="flex items-center text-lg py-2 pl-1 cursor-pointer hover:bg-white w-full">
				<Icon /> <span className="ml-2">{title}</span>
			</div>
		</div>
	);
};

export default NewFeedsItem;
