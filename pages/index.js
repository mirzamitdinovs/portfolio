import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import Image from 'next/image';
export default function Home() {
	const { user } = useContext(UserContext);
	console.log('user: ', user);
	return (
		<div
			className='flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh] xl:h-[71vh] justify-center aos-init aos-animate'
			data-aos='fade'
		>
			<Image
				className='rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px]'
				src={`https:${user.avatarMain.fields.file.url}`}
				alt='about avatar'
				width={250}
				height={250}
			/>
			<h3 className='mt-6 mb-1 text-5xl font-semibold dark:text-white'>
				{' '}
				{user.name}
			</h3>
			<p className='mb-4 text-[#7B7B7B]'>{user.jobTitle}</p>
			{/* social link and social  buttons */}
			<div className='flex space-x-3'>
				{user.socialLinks.map((item, index) => (
					<a
						key={index}
						href={item.fields.url}
						target='_blank'
						rel='noopener noreferrer'
					>
						<span className={`socialbtn text-[#1C9CEA]`}>
							{item.fields.name.toLowerCase().includes('linked') && (
								<i className='fa-brands fa-linkedin-in' />
							)}
							{item.fields.name.toLowerCase().includes('github') && (
								<i className='fa-brands fa-github' />
							)}{' '}
							{item.fields.name.toLowerCase().includes('leet') && (
								<svg
									role='img'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
									height={16}
									stroke='currentColor'
								>
									<title>LeetCode</title>
									<path d='M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z' />
								</svg>
							)}{' '}
							{item.fields.name.toLowerCase().includes('what') && (
								<i className='fa-brands fa-whatsapp' />
							)}
						</span>
					</a>
				))}
			</div>
			{/* dowanload button */}
			<a href={user.cv.fields.file.url} download className='dowanload-btn'>
				<img src='images/icons/dowanload.png' alt='icon' className='mr-2' />
				Download CV{' '}
			</a>
		</div>
	);
}
