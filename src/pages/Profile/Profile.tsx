import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Profile = () => {
	const { login } = useSelector((state: RootState) => state.auth);

	return <h1>Hi, {login}! </h1>;
};

export default Profile;
