import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Profile from './pages/Profile/Profile';
import { store } from './redux/store';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/profile',
		element: <Profile />,
	},
]);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
