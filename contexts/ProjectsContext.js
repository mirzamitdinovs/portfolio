import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
	const [projects, setProjects] = useState(null);

	useEffect(() => {
		if (!projects) {
			getProjects();
		}
	}, []);

	const getProjects = async () => {
		const res = await axios.get('/api/v1/projects');
		setProjects(res.data);
	};

	return (
		<ProjectsContext.Provider value={{ projects }}>
			{children}
		</ProjectsContext.Provider>
	);
};

export default ProjectsContext;
