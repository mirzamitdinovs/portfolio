import React from 'react';

import { urlFor } from '../client';
import { SectionWrapper } from '../hoc';
import { BallCanvas } from './canvas';

const Tech = ({ technologies }) => {
	return (
		<div className='flex flex-row flex-wrap justify-center gap-10'>
			{technologies.map((technology) => (
				<div className='w-28 h-28' key={technology.name}>
					<BallCanvas icon={urlFor(technology.image)} />
				</div>
			))}
		</div>
	);
};

export default SectionWrapper(Tech, '');
