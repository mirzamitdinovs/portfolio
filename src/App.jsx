import { BrowserRouter } from 'react-router-dom';

import {
	About,
	Contact,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	Tech,
	Works,
	StarsCanvas,
} from './components';
import { client } from './client';
import { PROJECTS_SCHEMA } from './config/queries';
import { useEffect, useState } from 'react';

const App = () => {
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		getData();
	}, []);
	const getData = async () => {
		const res = await client.fetch(PROJECTS_SCHEMA);
		setProjects(res);
	};

	console.log('projects: ', projects);
	return (
		<BrowserRouter>
			<div className='relative z-0 bg-primary'>
				<div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
					<Navbar />
					<Hero />
				</div>
				<About />
				<Experience />
				<Tech />
				<Works data={projects} />
				<Feedbacks />
				<div className='relative z-0'>
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
