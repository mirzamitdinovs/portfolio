import { useContext } from 'react';
import Footer from '../../components/Footer';
import UserContext from '../../contexts/UserContext';

const ContactPage = () => {
	const { user } = useContext(UserContext);
	return (
		<div className='bg-white lg:rounded-2xl dark:bg-[#111111]'>
			<div data-aos='fade' className='aos-init aos-animate'>
				<div className='container px-4 sm:px-5 md:px-10 lg:px-20'>
					<div className='py-12'>
						<h2 className='after-effect after:left-40 mb-[40px] mt-12 lg:mt-0'>
							Contact
						</h2>
						<div className='lg:flex gap-x-20'>
							{/* personal contact information */}
							<div className='w-full lg:w-[60%] xl:w-[40%] space-y-6'>
								<div
									className={`flex flex-wrap bg-[#fcf4ff] dark:bg-transparent p-[30px] dark:border-[#212425] dark:border-2 gap-2 rounded-xl`}
								>
									<span className='w-8 mt-2'>
										<img
											src='images/contact/phone-call.png'
											alt='icon'
											className='text-4xl dark:text-white'
										/>
									</span>
									<div className='space-y-2'>
										<p className='text-xl font-semibold dark:text-white'>
											Phone:
										</p>
										<p className='text-gray-lite text-lg dark:text-[#A6A6A6]'>
											{user.phone}
										</p>
									</div>
								</div>
								<div
									className={`flex flex-wrap bg-[#eefbff] dark:bg-transparent p-[30px] dark:border-[#212425] dark:border-2 gap-2 rounded-xl`}
								>
									<span className='w-8 mt-2'>
										<img
											src='images/contact/map.png'
											alt='icon'
											className='text-4xl dark:text-white'
										/>
									</span>
									<div className='space-y-2'>
										<p className='text-xl font-semibold dark:text-white'>
											Address:
										</p>
										<p className='text-gray-lite text-lg dark:text-[#A6A6A6]'>
											{user.address}
										</p>
									</div>
								</div>{' '}
								<div
									className={`flex flex-wrap bg-[#fcf4ff] dark:bg-transparent p-[30px] dark:border-[#212425] dark:border-2 gap-2 rounded-xl`}
								>
									<span className='w-8 mt-2'>
										<img
											src='images/contact/email.png'
											alt='icon'
											className='text-4xl dark:text-white'
										/>
									</span>
									<div className='space-y-2'>
										<p className='text-xl font-semibold dark:text-white'>
											Email:
										</p>
										<p className='text-gray-lite text-lg dark:text-[#A6A6A6]'>
											{user.email}
										</p>
									</div>
								</div>
							</div>
							<div className='w-full mt-8 lg:mt-0 lg:w-[40%] xl:w-[60%]'>
								<div
									data-aos='fade'
									className='dark:border-[#212425] dark:border-2 mb-16 md:p-[48px] p-4 bg-color-810 rounded-xl dark:bg-[#111111] mb-[30px] md:mb-[60px] aos-init aos-animate'
								>
									<h3 className='text-4xl'>
										<span className='text-gray-lite dark:text-[#A6A6A6]'>
											I&apos;m always open to discussing product
										</span>
										<br />
										<span className='font-semibold dark:text-white'>
											development work or partnerships.
										</span>
									</h3>
									<form
										id='myForm'
										action='https://formspree.io/f/xoqrgaab'
										method='POST'
									>
										{/* name input */}
										<div className='relative z-0 w-full mt-[40px] mb-8 group'>
											<input
												type='text'
												id='name'
												name='name'
												className='block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer'
												placeholder=' '
												required
											/>
											<label
												htmlFor='name'
												className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8'
											>
												Name *
											</label>
										</div>
										{/* email input  */}
										<div className='relative z-0 w-full mb-8 group'>
											<input
												type='email'
												name='user_email'
												className='block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer'
												placeholder=' '
												id='user_email'
												required
											/>
											<label
												htmlFor='user_email'
												className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8'
											>
												Email *
											</label>
										</div>
										{/* massage input */}
										<div className='relative z-0 w-full mb-8 group'>
											<input
												type='text'
												name='message'
												className='block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer'
												placeholder=' '
												id='message'
												required
											/>
											<label
												htmlFor='message'
												className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8'
											>
												Message *
											</label>
										</div>
										<div className='transition-all duration-300 ease-in-out inline-block hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-lg mt-3'>
											{/* submit buttons */}
											<input
												type='submit'
												className='transition ease-in duration-200 font-semibold cursor-pointer border-color-910 hover:border-transparent px-6 py-2 rounded-lg border-[2px] hover:text-white dark:text-white'
												defaultValue='Submit'
											/>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default ContactPage;
