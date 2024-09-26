import { BrowserRouter } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { loader } from './assets';
import { client } from './client';
import {
	About,
	Contact,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	StarsCanvas,
	Tech,
	Works,
} from './components';
import { USER_SCHEMA } from './config/queries';

const App = () => {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		if (user && user.first_name) {
			document.title = `${user.first_name} | Portfolio`;
		}
	}, [user]);

	const getData = async () => {
		const [user] = await client.fetch(USER_SCHEMA);

		setUser(user);

		setLoading(false);
	};

	console.log('user: ', user);
	if (loading)
		return (
			<div className='h-screen w-full flex items-center justify-center bg-primary'>
				<img className='h-52 w-52 ' src={loader} />
			</div>
		);
	return (
		<BrowserRouter>
			<div className='relative z-0 bg-primary'>
				<div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
					<Navbar logo={`${user.first_name[0]}${user.last_name[0]}`} />
					<Hero name={user.first_name} bio={user.short_bio} />
				</div>
				<About bio={user.detailed_bio} services={user.skills} />
				<Experience experiences={user.experiences} />
				<Tech technologies={user.technologies} />
				<div className='relative z-20'>
					<Works data={user.projects} />
				</div>
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
