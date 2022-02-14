import {RiUserSettingsLine} from 'react-icons/ri';

import NewFeedsItem from "./NewFeedsItem";

const Account = () => {
  return (
    <div className="bg-green-200 px-5 my-10  py-5 rounded-lg drop-shadow-xl">
			<h2 className="text-3xl font-bold mb-2 text-purple-700 ">Account</h2>

      <NewFeedsItem Icon={RiUserSettingsLine} title="Setting & privacy" />
		</div>
  );
};

export default Account;