import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		if (!user) {
			getUser();
		}
	}, []);

	const getUser = async () => {
		const res = await axios.get('/api/v1/user');
		setUser(res.data);
	};
	if (!user) {
		return <Loader />;
	}
	return (
		<UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
	);
};

export default UserContext;
