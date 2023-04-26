import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { authState } from '../../models/AuthState';

const initialState: authState = {
	login: '',
	password: '',
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setStateValue: (
			state,
			action: PayloadAction<{ name: string; value: string }>
		) => {
			action.payload.name === 'login'
				? (state.login = action.payload.value)
				: (state.password = action.payload.value);
		},
	},
});

export const { setStateValue } = authSlice.actions;

export default authSlice.reducer;
