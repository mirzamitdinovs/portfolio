import resumeData from '../../data/resume.data';
import Footer from '../../components/Footer';
const ResumePage = () => {
	return (
		<section className='bg-white lg:rounded-2xl dark:bg-[#111111]'>
			<div data-aos='fade' className='aos-init aos-animate'>
				<div className='container sm:px-5 md:px-10 lg:px-20'>
					<div className='py-12 px-4'>
						<h2 className='after-effect after:left-44 mb-[40px] mt-12 lg:mt-0'>
							{' '}
							Resume{' '}
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6'>
							{/* eductation contain */}
							<div>
								<div className='flex items-center space-x-2 mb-4'>
									<i className='fa-solid text-6xl text-[#F95054] fa-graduation-cap' />
									<h4 className='text-5xl dark:text-white font-medium'>
										{' '}
										Education{' '}
									</h4>
								</div>
								{resumeData.education.map((item, index) => (
									<div
										key={index}
										className={`py-4 dark:bg-transparent ${item.color} pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2`}
									>
										<span className='text-tiny text-gray-lite dark:text-[#b7b7b7]'>
											{item.from}-{item.to}
										</span>
										<h3 className='text-xl dark:text-white'>{item.title}</h3>
										<p className='dark:text-[#b7b7b7]'>{item.school}</p>
									</div>
								))}
							</div>
							<div>
								{/* Experience contain */}
								<div className='flex items-center space-x-2 mb-4'>
									<i className='fa-solid text-6xl text-[#F95054] fa-briefcase' />
									<h4 className='text-5xl dark:text-white font-medium'>
										{' '}
										Experience{' '}
									</h4>
								</div>
								{resumeData.experience.slice(0, 3).map((item, index) => (
									<div
										key={index}
										className={`py-4 dark:bg-transparent ${item.color} pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2`}
									>
										<span className='text-tiny text-gray-lite dark:text-[#b7b7b7]'>
											{item.from}-{item.to}
										</span>
										<h3 className='text-xl dark:text-white'>{item.title}</h3>
										<p className='dark:text-[#b7b7b7]'>{item.company}</p>
									</div>
								))}
							</div>
							<div>
								<div className='flex items-center space-x-2 mb-4 pt-14'>
									{/* <i className='fa-solid fa-award text-6xl text-[#F95054]' /> */}
									<h4 className='text-5xl dark:text-white font-medium mb-1'>
										{' '}
										{/* Awards{' '} */}
									</h4>
								</div>
								{resumeData.experience.slice(3).map((item, index) => (
									<div
										key={index}
										className={`py-4 dark:bg-transparent ${item.color} pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2`}
									>
										<span className='text-tiny text-gray-lite dark:text-[#b7b7b7]'>
											{item.from}-{item.to}
										</span>
										<h3 className='text-xl dark:text-white'>{item.title}</h3>
										<p className='dark:text-[#b7b7b7]'>{item.company}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				{/* working skills */}
				<div className='container bg-[#f8fbfb] dark:bg-[#0D0D0D] py-12 px-4 sm:px-5 md:px-10 lg:px-20'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						<div className='col-span-1'>
							<h4 className='text-5xl dark:text-white font-medium mb-6'>
								{' '}
								Working Skills{' '}
							</h4>
							{resumeData.skills.map((item, index) => (
								<div key={index} className='mb-5'>
									<div className='flex justify-between mb-1'>
										<span className=' font-semibold text-[#526377] dark:text-[#A6A6A6]'>
											{item.title}
										</span>
										<span className=' font-semibold text-[#526377] dark:text-[#A6A6A6'>
											{item.level}%
										</span>
									</div>
									<div className='w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]'>
										<div
											className={`${item.color} h-1 rounded-full`}
											style={{ width: `${item.level}%` }}
										/>
									</div>
								</div>
							))}
						</div>
						{/* button group */}
						<div className='col-span-1'>
							<h4 className='text-5xl dark:text-white font-medium mb-8'>
								{' '}
								Knowledges{' '}
							</h4>
							<div className='flex gap-x-3 gap-y-3 md:gap-y-6 md:gap-x-4 flex-wrap'>
								{resumeData.technologies.map((item, index) => (
									<button key={index} className='resume-btn'>
										{item}
									</button>
								))}
							</div>
						</div>
						{/* end button group */}
					</div>
				</div>
				<Footer />
			</div>
		</section>
	);
};

export default ResumePage;
