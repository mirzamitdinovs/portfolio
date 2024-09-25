import React from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { urlFor } from '../client';
import { FORMAT_DATE } from '../utils/date.utils';

const ExperienceCard = ({ experience }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: '#1d1836',
				color: '#fff',
			}}
			contentArrowStyle={{ borderRight: '7px solid  #232631' }}
			date={`${FORMAT_DATE(experience.start_date)} - ${
				experience.end_date ? FORMAT_DATE(experience.end_date) : 'Now'
			} `}
			iconStyle={{ background: '#1D1836' }}
			icon={
				<div className='flex justify-center items-center  w-full h-full'>
					<img
						src={urlFor(experience.company.logo)}
						alt={experience.company.name}
						className='w-[80%] h-[80%] object-contain rounded-full overflow-hidden'
					/>
				</div>
			}
		>
			<div>
				<h3 className='text-white text-[24px] font-bold'>
					{experience.job_title}{' '}
				</h3>
				<p
					className='text-secondary text-[16px] font-semibold'
					style={{ margin: 0 }}
				>
					{experience.company.name}
				</p>
			</div>

			<ul className='mt-5 list-disc ml-5 space-y-2'>
				{experience.achievements_or_tasks.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className='text-white-100 text-[14px] pl-1 tracking-wider'
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

const Experience = ({ experiences }) => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText} text-center`}>
					What I have done so far
				</p>
				<h2 className={`${styles.sectionHeadText} text-center`}>
					Work Experience.
				</h2>
			</motion.div>

			<div className='mt-20 flex flex-col'>
				<VerticalTimeline>
					{experiences.map((experience, index) => (
						<ExperienceCard
							key={`experience-${index}`}
							experience={experience}
						/>
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Experience, 'work');
