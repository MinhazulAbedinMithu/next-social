const NewFeedsItem = (props: any) => {
	const { Icon, title } = props;
	return (
		<div>
			<div className="flex items-center py-2 pl-1 cursor-pointer hover:bg-yellow-100 w-full rounded">
				<Icon className="font-bold text-4xl text-green-500 "/> <span className="ml-2 text-2xl font-bold">{title}</span>
			</div>
		</div>
	);
};

export default NewFeedsItem;
