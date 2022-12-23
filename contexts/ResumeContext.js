import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
	const [resume, setResume] = useState(null);

	useEffect(() => {
		if (!resume) {
			getResume();
		}
	}, []);

	const getResume = async () => {
		const res = await axios.get('/api/v1/resume');
		setResume(res.data);
	};

	return (
		<ResumeContext.Provider value={{ resume }}>
			{children}
		</ResumeContext.Provider>
	);
};

export default ResumeContext;
