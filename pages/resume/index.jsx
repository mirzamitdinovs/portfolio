import resumeData from '../../data/resume.data';
import Footer from '../../components/Footer';
import { useContext } from 'react';
import ResumeContext from '../../contexts/ResumeContext';
import Loader from '../../components/Loader';

const skillColors = {
	0: 'bg-[#FF6464]',
	1: 'bg-[#9272d4]',
	2: 'bg-[#5185d4]',
	3: 'bg-[#ca56f2]',
};
const ResumePage = () => {
	const { resume } = useContext(ResumeContext);
	if (!resume) {
		return <Loader />;
	}
	return (
		<section className='bg-white lg:rounded-2xl dark:bg-[#111111]'>
			<div data-aos='fade' className='aos-init aos-animate'>
				<div className='container sm:px-5 md:px-10 lg:px-20'>
					<div className='py-12 px-4'>
						<h2 className='after-effect after:left-44 mb-[40px] mt-12 lg:mt-0'>
							{' '}
							Resume{' '}
						</h2>
						<div>
							<div className='flex items-center space-x-2 mb-4'>
								<i className='fa-solid text-6xl text-[#F95054] fa-graduation-cap' />
								<h4 className='text-5xl dark:text-white font-medium'>
									{' '}
									Experience{' '}
								</h4>
							</div>
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6'>
								{resume.experience.map((item, index) => (
									<div
										key={index}
										className={`py-4 dark:bg-transparent ${
											index % 2 === 0 ? 'bg-[#fff4f4]' : 'bg-[#fff1fb]'
										} pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2`}
									>
										<span className='text-tiny text-gray-lite dark:text-[#b7b7b7]'>
											{item.fields.date}
										</span>
										<h3 className='text-xl dark:text-white'>
											{item.fields.title}
										</h3>
										<p className='dark:text-[#b7b7b7]'>{item.fields.company}</p>
									</div>
								))}
							</div>
						</div>

						<div className='mt-5'>
							<div className='flex items-center space-x-2 mb-4'>
								<i className='fa-solid text-6xl text-[#F95054] fa-graduation-cap' />
								<h4 className='text-5xl dark:text-white font-medium'>
									{' '}
									Education{' '}
								</h4>
							</div>
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6'>
								{resume.education.map((item, index) => (
									<div
										key={index}
										className={`py-4 dark:bg-transparent ${
											index % 2 === 0 ? 'bg-[#fff4f4]' : 'bg-[#fff1fb]'
										} pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2`}
									>
										<span className='text-tiny text-gray-lite dark:text-[#b7b7b7]'>
											{item.fields.date}
										</span>
										<h3 className='text-xl dark:text-white'>
											{item.fields.title}
										</h3>
										<p className='dark:text-[#b7b7b7]'>{item.fields.school}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				{/* working skills */}
				<div className='container bg-[#f8fbfb] dark:bg-[#0D0D0D] py-12 px-4 sm:px-5 md:px-10 lg:px-20'>
					<div>
						<h4 className='text-5xl dark:text-white font-medium mb-6'>
							{' '}
							Working Skills{' '}
						</h4>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							{resume.skills.map((item, index) => (
								<div key={index} className='mb-5'>
									<div className='flex justify-between mb-1'>
										<span className=' font-semibold text-[#526377] dark:text-[#A6A6A6]'>
											{item.fields.title}
										</span>
										<span className=' font-semibold text-[#526377] dark:text-[#A6A6A6'>
											{item.fields.efficiency}%
										</span>
									</div>
									<div className='w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]'>
										<div
											className={`${skillColors[index]} h-1 rounded-full`}
											style={{ width: `${item.fields.efficiency}%` }}
										/>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className='mt-5'>
						<h4 className='text-5xl dark:text-white font-medium mb-8'>
							{' '}
							Knowledges{' '}
						</h4>
						<div className='flex gap-x-3 gap-y-3 md:gap-y-6 md:gap-x-4 flex-wrap'>
							{resume.knowledges.map((item, index) => (
								<button key={index} className='resume-btn'>
									{item.fields.title}
								</button>
							))}
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</section>
	);
};

export default ResumePage;
