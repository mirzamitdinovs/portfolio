import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Footer from '../../components/Footer';
import clientsData from '../../data/clients.data';
import userData from '../../data/user.data';
import whatidoData from '../../data/whatido.data';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import Image from 'next/image';
const AboutPage = () => {
	const { user } = useContext(UserContext);
	const settings = {
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: false,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div>
			<div className='container lg:rounded-2xl bg-white dark:bg-[#111111] px-4 sm:px-5 md:px-10 lg:px-20'>
				<div data-aos='fade' className='aos-init aos-animate'>
					<div className='py-12'>
						{/* about page title */}
						<h2 className='after-effect after:left-52 mt-12 lg:mt-0'>
							{' '}
							About Me{' '}
						</h2>
						<div className='grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center'>
							<div className='col-span-12 md:col-span-4'>
								{/* about me image */}
								<Image
									className='w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0'
									src={`https:${user.avatarAbout.fields.file.url}`}
									alt='about image'
									width={330}
									height={400}
								/>
							</div>
							<div className='col-span-12 md:col-span-8 space-y-2.5'>
								{/* who am i content  */}
								<div className='md:mr-12 xl:mr-16'>
									<h3 className='text-4xl font-medium dark:text-white mb-2.5'>
										{' '}
										Who am i?{' '}
									</h3>
									<p className='text-gray-lite dark:text-color-910 leading-7'>
										{user.about}
									</p>
								</div>
								<div>
									<h3 className='text-4xl font-medium my-5 dark:text-white'>
										{' '}
										Personal Info{' '}
									</h3>
									<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
										<div className='flex'>
											<span
												className={`text-oriange dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-`}
											>
												<i className='fa-solid fa-mobile-screen-button' />
											</span>
											<div className='space-y-1'>
												<p className='text-xs text-gray-lite dark:text-color-910'>
													Phone
												</p>
												<h6 className='font-medium dark:text-white'>
													{user.phone}
												</h6>
											</div>
										</div>
										<div className='flex'>
											<span
												className={`text-oriange-lite dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-`}
											>
												<i className='fa-solid fa-location-dot' />
											</span>
											<div className='space-y-1'>
												<p className='text-xs text-gray-lite dark:text-color-910'>
													Address
												</p>
												<h6 className='font-medium dark:text-white'>
													{user.address}
												</h6>
											</div>
										</div>
										<div className='flex'>
											<span
												className={`text-green dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-`}
											>
												<i className='fa-solid fa-envelope-open-text' />
											</span>
											<div className='space-y-1'>
												<p className='text-xs text-gray-lite dark:text-color-910'>
													Email
												</p>
												<h6 className='font-medium dark:text-white'>
													{user.email}
												</h6>
											</div>
										</div>
										<div className='flex'>
											<span
												className={`text-color-50 dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-`}
											>
												<i className='fa-solid fa-calendar-days' />
											</span>
											<div className='space-y-1'>
												<p className='text-xs text-gray-lite dark:text-color-910'>
													Birthday
												</p>
												<h6 className='font-medium dark:text-white'>
													{user.birthday}
												</h6>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* whai i do contain */}
					<div className='pb-12'>
						<h3 className='text-[35px] dark:text-white font-medium pb-5'>
							{' '}
							What I do!{' '}
						</h3>
						<div className='grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
							{whatidoData.map((item, index) => (
								<div
									key={index}
									className={`about-box dark:bg-transparent ${item.color}`}
								>
									<img
										className='w-10 h-10 object-contain block'
										src={item.icon}
										alt='icon'
									/>
									<div className='space-y-2'>
										<h3 className='dark:text-white text-2xl font-semibold'>
											{item.title}
										</h3>
										<p className='leading-8 text-gray-lite dark:text-[#A6A6A6]'>
											{item.text}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
					{/* what i do contain end */}
					<div>
						<div className='bg-[#F8FBFB] dark:bg-[#0D0D0D] max-w-full h-auto py-10 rounded-xl'>
							<h3 className='text-center dark:text-white text-6xl mb-3 font-semibold'>
								Clients
							</h3>
							{/* slider and slider items start */}
							{/* <div className='slickTwo px-2 pt-8'> */}
							<Slider {...settings} className='px-2 pt-8'>
								{clientsData.map((item, index) => (
									<div key={index}>
										<img
											className='overflow-hidden brand-img ml-auto mr-auto'
											src={item}
											alt='brand'
										/>
									</div>
								))}
							</Slider>
							{/* </div> */}
							{/* slider and slider items end */}
						</div>
					</div>
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
