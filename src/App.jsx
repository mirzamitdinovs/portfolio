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
import {
	EXPERIENCE_SCHEMA,
	PROJECTS_SCHEMA,
	TECHNOLOGIES_SCHEMA,
	USER_SCHEMA,
} from './config/queries';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
	const [projects, setProjects] = useState([]);
	const [user, setUser] = useState({});
	const [technologies, setTechnologies] = useState([]);
	const [experience, setExperience] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		getData();
	}, []);
	const getData = async () => {
		const [projects, [user], technologies, experience] = await axios.all([
			client.fetch(PROJECTS_SCHEMA),
			client.fetch(USER_SCHEMA),
			client.fetch(TECHNOLOGIES_SCHEMA),
			client.fetch(EXPERIENCE_SCHEMA),
		]);

		setUser(user);
		setProjects(projects);
		setTechnologies(technologies);
		setExperience(experience);
		setLoading(false);
	};

	if (loading) return <h2>Loading...</h2>;
	return (
		<BrowserRouter>
			<div className='relative z-0 bg-primary'>
				<div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
					<Navbar logo={`${user.first_name[0]}${user.last_name[0]}`} />
					<Hero name={user.first_name} bio={user.short_bio} />
				</div>
				<About bio={user.detailed_bio} services={user.skills} />
				<Experience experiences={user.experiences} />
				<Tech technologies={technologies} />
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
