const NewFeedsItem = (props: any) => {
	const { Icon, title } = props;
	return (
		<div>
			<div className="flex items-center">
				<Icon /> <span>{title}</span>
			</div>
		</div>
	);
};

export default NewFeedsItem;
