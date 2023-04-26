import { Link } from 'react-router-dom';

import './styles.css';

import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setStateValue } from '../../redux/slices/authSlice';
import { RootState } from '../../redux/store';

export const Login = () => {
	const { login, password } = useSelector((state: RootState) => state.auth);
	const dispatch = useDispatch();

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		dispatch(setStateValue({ name, value }));
	};

	const isButtonDisabled = login !== 'developer12' || password !== '123456';

	return (
		<form className='form'>
			<input
				className='form__input'
				type='text'
				name='login'
				placeholder='Логин'
				value={login}
				onChange={handleInputChange}
			/>
			<input
				className='form__input'
				type='text'
				name='password'
				placeholder='Пароль'
				value={password}
				onChange={handleInputChange}
			/>
			<Link
				className={`form__link${isButtonDisabled ? '--disabled' : ''}`}
				to={'/profile'}
			>
				Войти
			</Link>
		</form>
	);
};
