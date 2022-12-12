import userData from '../data/user.data';

export default function Home() {
	return (
		<div
			className='flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh] xl:h-[71vh] justify-center aos-init aos-animate'
			data-aos='fade'
		>
			{/* personal image */}
			<img
				className='rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px]'
				src={userData.avatar}
				alt='about avatar'
			/>
			<h3 className='mt-6 mb-1 text-5xl font-semibold dark:text-white'>
				{' '}
				{userData.full_name}
			</h3>
			<p className='mb-4 text-[#7B7B7B]'>{userData.job_title}</p>
			{/* social link and social  buttons */}
			<div className='flex space-x-3'>
				{userData.social_links.map((item, index) => (
					<a
						key={index}
						href={item.url}
						target='_blank'
						rel='noopener noreferrer'
					>
						<span className={`socialbtn text-[${item.color}]`}>
							{item.icon}
						</span>
					</a>
				))}
			</div>
			{/* dowanload button */}
			<a
				href='assets/cv/SayyodMirzamitdinovCV.pdf'
				download
				className='dowanload-btn'
			>
				<img src='images/icons/dowanload.png' alt='icon' className='mr-2' />
				Download CV{' '}
			</a>
		</div>
	);
}
