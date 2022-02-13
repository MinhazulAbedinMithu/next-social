const NewFeedsItem = (props: any) => {
	const { Icon, title } = props;
	return (
		<div>
			<div className="flex items-center bg-red-700">
				<Icon /> <span>{title}</span>
			</div>
		</div>
	);
};

export default NewFeedsItem;
