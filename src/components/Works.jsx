import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { s } from 'maath/dist/misc-7d870b3c.esm';
import { urlFor } from '../client';
// Array of predefined colors
const colors = [
	'#3B82F6',
	'#10B981',
	'#F59E0B',
	'#EF4444',
	'#6366F1',
	'#8B5CF6',
	'#EC4899',
	'#14B8A6',
	'#F97316',
	'#6B7280',
	'#D97706',
	'#059669',
	'#2563EB',
	'#9333EA',
	'#EA580C',
	'#7C3AED',
	'#DB2777',
	'#4ADE80',
	'#FB923C',
	'#60A5FA',
];

// Function to get a random color from the array
function getRandomColor() {
	const randomIndex = Math.floor(Math.random() * colors.length);
	return colors[randomIndex];
}

const ProjectCard = ({ index, title, description, image, tags }) => {
	return (
		<motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
			>
				<div className='relative w-full h-[230px]'>
					<img
						src={urlFor(image)}
						alt='project_image'
						className='w-full h-full object-cover rounded-2xl'
					/>

					{/* <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
						<div
							onClick={() => window.open(source_code_link, '_blank')}
							className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
						>
							<img
								src={github}
								alt='source code'
								className='w-1/2 h-1/2 object-contain'
							/>
						</div>
					</div> */}
				</div>

				<div className='mt-5'>
					<h3 className='text-white font-bold text-[24px]'>{title}</h3>
					<p className='mt-2 text-secondary text-[14px]'>{description}</p>
				</div>

				<div className='mt-4 flex flex-wrap gap-2'>
					{tags.map((tag) => (
						<p
							style={{ color: getRandomColor() }}
							key={`${title}-${tag.name}`}
							className={`text-[14px]`}
						>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

const Works = ({ data }) => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText} `}>My work</p>
				<h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
			</motion.div>

			<div className='w-full flex'>
				<motion.p
					variants={fadeIn('', '', 0.1, 1)}
					className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
				>
					Following projects showcases my skills and experience through
					real-world examples of my work. Each project is briefly described with
					links to code repositories and live demos in it. It reflects my
					ability to solve complex problems, work with different technologies,
					and manage projects effectively.
				</motion.p>
			</div>

			<div className='mt-20 flex flex-wrap gap-7'>
				{data.map((project, index) => (
					<ProjectCard
						key={`project-${index}`}
						index={index}
						title={project.title}
						description={project.description}
						image={project.images[0]}
						tags={project.tags}
					/>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, '');
