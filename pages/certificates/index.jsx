import { useRef } from 'react';
import CustomModal from '../../components/Modal';

const CertificatesPage = () => {
	const modalRef = useRef(null);
	return (
		<div>
			<div className='bg-white lg:rounded-2xl dark:bg-[#111111]'>
				<div className='container px-4 sm:px-5 md:px-10 lg:px-[60px]'>
					<div className='py-12'>
						<h2 className='after-effect after:left-60 mt-12 lg:mt-0'>
							Certificates
						</h2>
						<div className='grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[30px] grid gap-x-10 gap-y-7 mb-6'>
							{/* blog items one start */}
							<div className='p-5 rounded-lg mb-2 h-full bg-[#fcf4ff] dark:bg-transparent dark:border-[#212425] dark:border-2'>
								<div className='overflow-hidden rounded-lg'>
									<div onClick={() => modalRef.current.open()}>
										<img
											className='rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110'
											src='images/blog_images/small/1.jpg'
											alt='blog image'
										/>
									</div>
								</div>
								<div className='flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]'>
									<span>17 April</span>
									<span className='dot-icon'>Inspiration</span>
								</div>
								<h3 className='text-lg font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]'>
									<div onClick={() => modalRef.current.open()}>
										How to Own Your Audience by Creating an Email List.
									</div>
								</h3>
							</div>
							{/* blog items one end */}
							{/* blog items two start */}
							<div className='p-5 rounded-lg mb-2 h-full bg-[#eefbff] dark:bg-transparent dark:border-[#212425] dark:border-2'>
								<div className='overflow-hidden rounded-lg'>
									<div onClick={() => modalRef.current.open()}>
										<img
											className='rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110'
											src='images/blog_images/small/2.jpg'
											alt='blog image'
										/>
									</div>
								</div>
								<div className='flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]'>
									<span>10 April</span>
									<span className='dot-icon'>Inspiration</span>
								</div>
								<h3 className='text-lg font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]'>
									<div onClick={() => modalRef.current.open()}>
										{' '}
										Everything You Need to Know About Web Accessibility.{' '}
									</div>
								</h3>
							</div>
							{/* blog items two end  */}
							{/* blog items three start */}
							<div className='p-5 rounded-lg mb-2 h-full dark:border-[#212425] dark:border-2 bg-[#fcf4ff] dark:bg-transparent'>
								<div className='overflow-hidden rounded-lg'>
									<div onClick={() => modalRef.current.open()}>
										<img
											className='rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110'
											src='images/blog_images/small/3.jpg'
											alt='blog image'
										/>
									</div>
								</div>
								<div className='flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]'>
									<span>21 April</span>
									<span className='dot-icon'>Web Design</span>
								</div>
								<h3 className='text-lg font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]'>
									<div onClick={() => modalRef.current.open()}>
										he window know to say beside you
									</div>
									T
								</h3>
							</div>
							{/* blog items three end */}
							{/* blog items four  start */}
							<div className='p-5 rounded-lg mb-2 h-full dark:border-[#212425] bg-[#fcf4ff] dark:bg-transparent dark:border-2'>
								<div className='overflow-hidden rounded-lg'>
									<div onClick={() => modalRef.current.open()}>
										<img
											className='rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110'
											src='images/blog_images/small/4.jpg'
											alt='blog image'
										/>
									</div>
								</div>
								<div className='flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]'>
									<span>27 April</span>
									<span className='dot-icon'>Inspiration</span>
								</div>
								<h3 className='text-lg font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]'>
									<div onClick={() => modalRef.current.open()}>
										Top 10 Toolkits for Deep Learning in 2021.
									</div>
								</h3>
							</div>
							{/* blog items four  end */}
							{/* blog items five  start */}
							<div className='p-5 rounded-lg mb-2 h-full dark:border-[#212425] bg-[#fcf4ff] dark:bg-transparent dark:border-2'>
								<div className='overflow-hidden rounded-lg'>
									<div onClick={() => modalRef.current.open()}>
										<img
											className='rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110'
											src='images/blog_images/small/5.jpg'
											alt='blog image'
										/>
									</div>
								</div>
								<div className='flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]'>
									<span>27 April</span>
									<span className='dot-icon'>Inspiration</span>
								</div>
								<h3 className='text-lg font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]'>
									<div onClick={() => modalRef.current.open()}>
										How to Own Your Audience by Creating an Email List.
									</div>
								</h3>
							</div>
							{/* blog items five   end */}
							{/* blog items six  start */}
							<div className='p-5 rounded-lg mb-2 h-full dark:border-[#212425] bg-[#fcf4ff] dark:bg-transparent dark:border-2'>
								<div className='overflow-hidden rounded-lg'>
									<div onClick={() => modalRef.current.open()}>
										<img
											className='rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110'
											src='images/blog_images/small/6.jpg'
											alt='blog image'
										/>
									</div>
								</div>
								<div className='flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]'>
									<span>27 April</span>
									<span className='dot-icon'>Inspiration</span>
								</div>
								<h3 className='text-lg font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]'>
									<div onClick={() => modalRef.current.open()}>
										Everything You Need to Know About Web Accessibility.
									</div>
								</h3>
							</div>
							{/* blog items six  end */}
						</div>
					</div>
				</div>
				{/* footer start */}
				<footer className='overflow-hidden rounded-b-2xl bg-[#f8fbfb] dark:bg-[#212425]'>
					<p className='text-center py-6 text-gray-lite dark:text-color-910'>
						{' '}
						© 2022 All Rights Reserved by{' '}
						<a
							className='hover:text-[#FA5252] duration-300 transition'
							href='#'
							target='_blank'
							rel='noopener noreferrer'
						>
							Drz-themes
						</a>
						.{' '}
					</p>
				</footer>
				{/* footer ends */}
			</div>

			<CustomModal ref={modalRef}>
				<div className='dark:scrollbarDark scrollbarLight overflow-y-scroll max-h-[60vh] lg:max-h-[80vh]'>
					<div className='pr-3 pb-2'>
						<img
							className='w-full md:h-[450px] object-cover rounded-xl mt-6'
							src='images/blog_images/1.jpg'
							alt='blog image'
						/>
						<div className='flex mt-4 text-tiny text-black dark:text-white'>
							<span>177 April</span>
							<span className='dot-icon'>Inspiration</span>
						</div>
						<h2 className='dark:text-white sm:text-3xl mt-2 font-medium'>
							{' '}
							How to Own Your Audience by Creating an Email List.{' '}
						</h2>
						<p className='dark:text-white font-normal text-[15px] sm:text-sm my-4'>
							{' '}
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
							consequatur delectus porro sapiente molestias, magni quasi sed,
							enim corporis omnis doloremque soluta inventore dolorum conseqr
							quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet
							consectetur adipisicing elit. Fuga consequatur delectus porro
							sapiente molestias, magni quasi sed, enim corporis omnis
							doloremque soluta inventore dolorum consequuntur quo obcaecati
							rerum sit non.{' '}
						</p>
						<p className='dark:text-white font-normal text-[15px] sm:text-sm my-4'>
							{' '}
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
							consequatur delectus porro sapiente molestias, magni quasi sed,
							enim corporis omnis doloremque soluta inventore dolorum consetur
							quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet
							consectetur adipisicing elit. Fuga consequatur delectus porro
							sapiente molestias, magni quasi sed, sit amet consectetur
							adipisicing elit. Fuga consequatur delectus porro sapiente
							molestias, magni quasi sed, enim corporis omnis doloremque soluta
							inventore dolorum consequuntur.{' '}
						</p>
						<p className='dark:text-white font-normal text-[15px] sm:text-sm my-4'>
							{' '}
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
							consequatur delectus porro sapiente molestias, magni quasi sed,
							enim corporis omnis doloremque soluta inventore dolorum
							consequuntur quo obcaecati rerum sit non.{' '}
						</p>
					</div>
					<div className='rounded-lg mt-6 bg-gradient-to-r from-[#FA5252] to-[#DD2476] p-[1px] mr-3'>
						<div className='dark:bg-[#232220] bg-[#ffffff] flex p-4 rounded-lg'>
							<div>
								<img
									className='md:w-[125px] rounded-xl'
									src='images/about/about.jpg'
									alt='about image'
								/>
							</div>
							<div className='pl-5'>
								<div className='flex justify-between items-center'>
									<h3 className='dark:text-white text-[22px] font-medium'>
										{' '}
										Rafia Ana{' '}
									</h3>
									<span className='dark:text-[#dedede] text-tiny'>
										15 min ago
									</span>
								</div>
								<p className='dark:text-white md:pr-16'>
									{' '}
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Sequi nam ad, unde vel aut soluta atque consequatur. Omnis,
									debitis nihil?
								</p>
								<button className='dark:text-[#dedede] text-tiny hover:text-[#FA5252] dark:hover:text-[#FA5252]'>
									Reply{' '}
								</button>
							</div>
						</div>
					</div>
					<div className='flex items-center md:justify-end space-x-4 mt-8 mr-3'>
						<h6 className='dark:text-white text-[20px]'>Login with:</h6>
						<div className='flex space-x-3'>
							<a
								href='https://www.facebook.com/'
								target='_blank'
								rel='noopener noreferrer'
							>
								<span className='socialbtn text-[#1773EA]'>
									<i className='fa-brands fa-facebook-f' />
								</span>
							</a>
							<a
								href='https://twitter.com/'
								target='_blank'
								rel='noopener noreferrer'
							>
								<span className='socialbtn text-[#1C9CEA]'>
									<i className='fa-brands fa-twitter' />
								</span>
							</a>
							<a
								href='https://dribbble.com/'
								target='_blank'
								rel='noopener noreferrer'
							>
								<span className='socialbtn text-[#e14a84]'>
									<i className='fa-brands fa-dribbble' />
								</span>
							</a>
							<a
								href='https://www.linkedin.com/'
								target='_blank'
								rel='noopener noreferrer'
							>
								<span className='socialbtn text-[#0072b1]'>
									<i className='fa-brands fa-linkedin-in' />
								</span>
							</a>
						</div>
					</div>
					<div className='pt-3'>
						<div className='pr-3 pb-4'>
							<form className='w-full'>
								<label className='block mb-2'>
									<span className='dark:text-white text-[25px] font-medium'>
										Leave a Reply
									</span>
									<textarea
										className='block w-full mt-3 p-3 dark:text-white hover:outline-none hover:border-0 focus:outline-none rounded dark:bg-[#0b0b0b5e] bg-gray'
										rows={3}
										defaultValue={''}
									/>
								</label>
								<button className='comment-btn'>Comment</button>
							</form>
						</div>
					</div>
				</div>
			</CustomModal>
		</div>
	);
};

export default CertificatesPage;
