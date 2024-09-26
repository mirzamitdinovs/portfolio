import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import Tilt from 'react-parallax-tilt';

import { urlFor } from '../client';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { eye, github } from '../assets';
import WorkModal from './WorkModal';
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

const ProjectCard = ({ index, project, onPreview }) => {
	console.log('project: ', project);
	const { title, description, images, tags, githubUrl, previewUrl } = project;

	const handleOpenGithub = (e) => {
		e.stopPropagation();
		window.open(githubUrl, '_blank');
	};
	const handleOpenPreview = (e) => {
		e.stopPropagation();
		window.open(previewUrl, '_blank');
	};

	return (
		<motion.div
			onClick={() => onPreview(project)}
			variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
		>
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
						src={urlFor(images[0])}
						alt='project_image'
						className='w-full h-full object-cover rounded-2xl'
					/>

					<div className='absolute gap-1 inset-0 flex justify-end m-3 card-img_hover'>
						{previewUrl && (
							<button
								onClick={handleOpenPreview}
								className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
							>
								<img
									src={eye}
									alt='source code'
									className='w-1/2 h-1/2 object-contain '
								/>
							</button>
						)}
						{githubUrl && (
							<button
								onClick={handleOpenGithub}
								className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
							>
								<img
									src={github}
									alt='source code'
									className='w-1/2 h-1/2 object-contain'
								/>
							</button>
						)}
					</div>
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
	const previewRef = useRef(null);

	const onPreview = (work) => {
		previewRef.current.open(work);
	};
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
						project={project}
						onPreview={onPreview}
					/>
				))}
			</div>

			<WorkModal ref={previewRef} />
		</>
	);
};

export default SectionWrapper(Works, 'projects');
