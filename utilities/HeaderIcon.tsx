// type IconProps = {
// 	Icon: String;
// };

const HeaderIcon = (props: any) => {
	const { Icon, active } = props;
	return (
		<div className="cursor-pointer md:px-10 md:hover:bg-yellow-100 rounded-xl active:border-b-2 active:border-green-600">
			<Icon className={`text-3xl md:text-4xl text-center mx-auto hover:text-green-500 ${active && 'text-green-800'}`} />
		</div>
	);
};

export default HeaderIcon;
