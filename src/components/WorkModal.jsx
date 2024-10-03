import { forwardRef, useImperativeHandle, useState } from 'react';
import { StarsCanvas } from './canvas';
import { close } from '../assets';
import { urlFor } from '../client';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';

const settings = {
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	dots: false,
	arrows: false,
};

const WorkModal = (props, ref) => {
	const [toggle, setToggle] = useState(false);
	const [data, setData] = useState(null);

	const imageData = [
		{
			url: 'https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg',
			alt: 'project image 1',
		},
		{
			url: 'https://d31i9b8skgubvn.cloudfront.net/folder/encyclopedia/Project.jpg',
			alt: 'project image 2',
		},
		{
			url: 'https://marvel-b1-cdn.bc0a.com/f00000000100045/www.elmhurst.edu/wp-content/uploads/2018/12/5-skills-project-management-degree-elmhurst-college-infographic-thumb.jpg',
			alt: 'project image 3',
		},
	];

	useImperativeHandle(ref, () => ({
		open: (data) => {
			setData(data);
			setToggle(true);
		},
	}));

	const closeModal = () => {
		setToggle(false);
		setData(null);
	};

	console.log('data: ', data);
	if (!toggle || !data) return;
	return (
		<div
			className='fixed top-0 right-0 left-0 bottom-0 z-50 overflow-scroll bg-black  p-20'
			style={{
				zIndex: '999',
			}}
		>
			<div className='bg-tertiary p-10 relative'>
				{/* Close Button */}
				<div className='absolute right-5 top-5'>
					<button onClick={closeModal}>
						<img
							src={close}
							alt='close'
							className='w-[20px] h-[20px] object-contain'
						/>
					</button>
				</div>

				{/* Project Title and Description */}
				<div>
					<h3 className='font-medium font-base-font text-white text-[35px] leading-[130.5%] mb-[20px] md:text-[25px] '>
						{data.title}
					</h3>
					<p className='text-[16px] leading-[26px] font-normal text-[#D8D8D8] mb-[20px]'>
						{data.description}
					</p>
				</div>

				{/* Project Images and Info */}
				<div className='grid grid-cols-12 gap-4'>
					{/* Project Images */}
					<div className='col-span-7'>
						{data.images?.length && (
							<Slider {...settings}>
								{imageData.map((imageItem, index) => (
									<div key={index} className='h-80 w-full'>
										<img
											className='h-full w-full object-contain cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg'
											src={imageItem.url}
											alt='Project image'
											width={500}
											height={320}
										/>
									</div>
								))}
								{/* {data.images.map((imageItem, index) => (
									<div key={index} className='h-80 w-full'>
										<img
											className='h-full w-full object-contain cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg'
											src={urlFor(imageItem)}
											alt='Project image'
											width={500}
											height={320}
										/>
									</div>
								))} */}
							</Slider>
						)}
					</div>
					{/* Project Info */}
					<div className='col-span-5'>
						<div className='max-w-[380px] ml-auto flex-[35%] lg:flex-[100%] mb-[50px] lg:mb-[40px] shadow-[0_8px_17px_0_rgba(0,0,0,20%),0_6px_20px_0_rgba(0,0,0,19%)] md:ml-0 md:max-w-full md:mt-[20px]'>
							<ul className='py-[10px] px-[30px] shadow-[0px_2px_10px_rgba(14,29,44,0.15)] md:ml-0 md:max-w-full col:py-[50px] col:px-[20px]'>
								<li className='flex py-[10px] text-[16px] text-white font-semibold relative justify-between '>
									Client :
									<span className='text-[#D8D8D8] font-normal'>wpOceans</span>
								</li>
								<li className='flex py-[10px] text-[16px] text-white font-semibold relative justify-between '>
									GitHub :
									<span className='text-[#D8D8D8] font-normal'>wpOceans</span>
								</li>
								<li className='flex py-[10px] text-[16px] text-white font-semibold relative justify-between '>
									Preview :
									<span className='text-[#D8D8D8] font-normal'>wpOceans</span>
								</li>
								<li className='flex py-[10px] text-[16px] text-white font-semibold relative justify-between '>
									Role :
									<span className='text-[#D8D8D8] font-normal'>wpOceans</span>
								</li>
								<li className='flex py-[10px] text-[16px] text-white font-semibold relative justify-between '>
									Start :
									<span className='text-[#D8D8D8] font-normal'>6 Month</span>
								</li>
								<li className='flex py-[10px] text-[16px] text-white font-semibold relative justify-between '>
									Completion :
									<span className='text-[#D8D8D8] font-normal'>
										15 Apr 2022
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Project Detailed Info */}
				<div className='gap-4 mt-[15px]'>
					{/* Challenges */}
					<div className=''>
						<h3 className='font-medium font-base-font text-white text-[35px] leading-[130.5%] mb-[20px] md:text-[25px]'>
							Challenges
						</h3>
						<ul>
							{data.challenges.map((challengeItem, index) => (
								<li
									key={index}
									className="py-[10px] text-white pl-[35px] col:text-[14px] relative before:absolute before:left-0 before:top-1/2 before:transform before:w-[25px] before:h-[25px] before:leading-[25px] before:rounded-[50%] before:text-center before:text-[14px] before:text-[#59C378] before:bg-[#59c3781a] before:-translate-y-1/2 before:font-['themify'] before:content-['\e64c']"
								>
									{challengeItem.challenge} → {challengeItem.solution}
								</li>
							))}
						</ul>
					</div>
					{/* Responsibilites */}
					<div className='md:mt-[40px]'>
						<h3 className='font-medium font-base-font text-white text-[35px] leading-[130.5%] mb-[20px] md:text-[25px]'>
							Responsibilities
						</h3>
						<ul>
							{data.responsibilities.map((responsibilityItem, index) => (
								<li
									key={index}
									className="py-[10px] text-white pl-[35px] col:text-[14px] relative before:absolute before:left-0 before:top-1/2 before:transform before:w-[25px] before:h-[25px] before:leading-[25px] before:rounded-[50%] before:text-center before:text-[14px] before:text-[#59C378] before:bg-[#59c3781a] before:-translate-y-1/2 before:font-['themify'] before:content-['\e64c']"
								>
									{responsibilityItem.description}
								</li>
							))}
						</ul>
					</div>
					{/* Results */}
					<div className='md:mt-[40px]'>
						<h3 className='font-medium font-base-font text-white text-[35px] leading-[130.5%] mb-[20px] md:text-[25px]'>
							Results
						</h3>
						<ul>
							{data.whatILearned.map((lessonItem, index) => (
								<li
									key={index}
									className="py-[10px] text-white pl-[35px] col:text-[14px] relative before:absolute before:left-0 before:top-1/2 before:transform before:w-[25px] before:h-[25px] before:leading-[25px] before:rounded-[50%] before:text-center before:text-[14px] before:text-[#59C378] before:bg-[#59c3781a] before:-translate-y-1/2 before:font-['themify'] before:content-['\e64c']"
								>
									{lessonItem.lesson}
								</li>
							))}
						</ul>
					</div>
					{/* Technologies */}
					<div className='md:mt-[40px]'>
						<h3 className='font-medium font-base-font text-white text-[35px] leading-[130.5%] mb-[20px] md:text-[25px]'>
							Technologies
						</h3>
						{data.technologies.map((technologyItem, index) => (
							<div
								key={index}
								className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary flex space-x-4'
							>
								{technologyItem.name}
							</div>
						))}
					</div>
				</div>
			</div>
			<StarsCanvas />
		</div>
	);
};

export default forwardRef(WorkModal);
