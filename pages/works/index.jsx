import { useEffect } from 'react';

const WorksPage = () => {
	useEffect(() => {
		if ($('#isotop-gallery-wrapper').length) {
			var $grid = $('#isotop-gallery-wrapper').isotope({
				// options
				itemSelector: '.isotop-item',
				percentPosition: true,
				masonry: {
					// use element for option
					columnWidth: '.grid-sizer',
				},
			});

			// filter items on button click
			$('.isotop-menu-wrapper').on('click', 'li', function () {
				var filterValue = $(this).attr('data-filter');
				$grid.isotope({ filter: filterValue });
			});

			// change is-checked class on buttons
			$('.isotop-menu-wrapper').each(function (i, buttonGroup) {
				var $buttonGroup = $(buttonGroup);
				$buttonGroup.on('click', 'li', function () {
					$buttonGroup.find('.is-checked').removeClass('is-checked');
					$(this).addClass('is-checked');
				});
			});
		}
	}, []);

	return (
		<section className='bg-white  lg:rounded-2xl dark:bg-[#111111]'>
			<div className='container mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]'>
				<div className='py-12'>
					<h2 className='after-effect after:left-48 mt-12 lg:mt-0'>
						Portfolio
					</h2>
					{/* fillter group buttons */}
					<ul className='button-group isotop-menu-wrapper mt-[30px] flex w-full justify-start md:justify-end flex-wrap font-medium'>
						<li className='fillter-btn mr-4 md:mx-4 is-checked' data-filter='*'>
							All
						</li>
						<li className='fillter-btn mr-4 md:mx-4' data-filter='.dev'>
							Video
						</li>
						<li className='fillter-btn mr-4 md:mx-4' data-filter='.plugin'>
							{' '}
							Web Design
						</li>
						<li className='fillter-btn mr-4 md:mx-4' data-filter='.branding'>
							{' '}
							Logo
						</li>
						<li className='fillter-btn mr-4 md:mx-4' data-filter='.custom'>
							Graphic Design
						</li>
					</ul>
				</div>
				{/* End py-12 */}
				<div
					id='isotop-gallery-wrapper'
					className='mymix portfolio_list-two  three-col '
				>
					<div className='grid-sizer' />
					{/* portfolio items one start */}
					<div className='portfolio_list-two-items isotop-item plugin custom '>
						<div className='rounded-lg bg-[#fff0f0] p-6 dark:bg-transparent dark:border-[2px] border-[#212425]'>
							<div className='overflow-hidden rounded-lg'>
								<a href='#portfiloOne' rel='modal:open'>
									<img
										className='w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto'
										src='images/work_images/small/1.jpg'
										alt='portfolio image'
									/>
								</a>
							</div>
							<span className='pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]'>
								UI/UX
							</span>
							<h2 className='font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2'>
								<a href='#portfiloOne' rel='modal:open'>
									{' '}
									Chul urina{' '}
								</a>
							</h2>
						</div>
					</div>
					{/* modal start for item one  */}
					<div id='portfiloOne' className='modal-container modal'>
						<div className='overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight'>
							<h2 className='text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold'>
								UI/UX Project
							</h2>
							<div className='grid grid-cols-1 lg:grid-cols-2 my-6 pr-3'>
								<div className='space-y-2'>
									<p className='dark:text-white flex items-center text-[15px] sm:text-lg'>
										<i className='fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl' />
										Project :&nbsp;
										<span className='font-medium'> Website</span>
									</p>
									<p className='dark:text-white flex items-center text-[15px] sm:text-lg'>
										<i className='fa-solid fa-code text-lg mr-2 hidden sm:block' />
										Langages :&nbsp;
										<span className='font-medium'>Photoshop, Figma</span>
									</p>
								</div>
								<div className='space-y-2'>
									<p className='dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg'>
										<i className='fa-regular fa-user text-lg mr-2 hidden sm:block' />
										Client :&nbsp; <span className='font-medium'>Envato</span>
									</p>
									<p className='dark:text-white flex items-center text-[15px] sm:text-lg'>
										<i className='fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block' />
										Preview :&nbsp;
										<span className='font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]'>
											<a href='#/' target='_blank' rel='noopener noreferrer'>
												www.envato.com
											</a>
										</span>
									</p>
								</div>
							</div>
							<p className='dark:text-white text-2line font-normal text-[15px] sm:text-sm'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Mollitia placeat magnam possimus iusto blanditiis pariatur
								labore explicabo quo repellat hic dolorum numquam asperiores,
								voluptatum fugiat reiciendis aspernatur, non, odio aperiam
								voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni
								distinctio dolorum dolore natus, vel numquam accusamus. Nostrum
								eligendi recusandae qui tempore deserunt!
							</p>
							<div className='pr-3'>
								<img
									className='w-full md:h-[450px] h-auto object-cover rounded-xl mt-6'
									src='images/work_images/1.jpg'
									alt='portfolio image'
								/>
							</div>
						</div>
						<a
							href='#close-modal'
							rel='modal:close'
							className='close bg-close-light dark:bg-close-dark'
						>
							Close
						</a>
					</div>
					{/* portfolio items two start */}
					<div className='portfolio_list-two-items isotop-item dev branding '>
						<div className='rounded-lg bg-[#fff3fc] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]'>
							<div className='overflow-hidden rounded-lg'>
								<a href='#portfiloTwo' rel='modal:open'>
									<img
										className='w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto'
										src='images/work_images/small/2.jpg'
										alt='portfolio image'
									/>
								</a>
							</div>
							<span className='pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]'>
								Logo
							</span>
							<h2 className='font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2'>
								<a href='#portfiloTwo' rel='modal:open'>
									Chul urina
								</a>
							</h2>
						</div>
					</div>
					{/* modal start for item two  */}
					<div id='portfiloTwo' className='modal-container modal'>
						<div className='overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight'>
							<h2 className='text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold'>
								Logo Project
							</h2>
							<div className='grid grid-cols-1 lg:grid-cols-2 my-6 pr-3'>
								<div className='space-y-2'>
									<p className='dark:text-white flex items-center text-[15px] sm:text-lg'>
										<i className='fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl' />
										Project :&nbsp;
										<span className='font-medium'> Website</span>
									</p>
									<p className='dark:text-white flex items-center text-[15px] sm:text-lg'>
										<i className='fa-solid fa-code text-lg mr-2 hidden sm:block' />
										Langages :&nbsp;
										<span className='font-medium'>Photoshop, Figma</span>
									</p>
								</div>
								<div className='space-y-2'>
									<p className='dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg'>
										<i className='fa-regular fa-user text-lg mr-2 hidden sm:block' />
										Client :&nbsp; <span className='font-medium'>Envato</span>
									</p>
									<p className='dark:text-white flex items-center text-[15px] sm:text-lg'>
										<i className='fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block' />
										Preview :&nbsp;
										<span className='font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]'>
											<a href='#/' target='_blank' rel='noopener noreferrer'>
												www.envato.com
											</a>
										</span>
									</p>
								</div>
							</div>
							<p className='dark:text-white text-2line font-normal text-[15px] sm:text-sm'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Mollitia placeat magnam possimus iusto blanditiis pariatur
								labore explicabo quo repellat hic dolorum numquam asperiores,
								voluptatum fugiat reiciendis aspernatur, non, odio aperiam
								voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni
								distinctio dolorum dolore natus, vel numquam accusamus. Nostrum
								eligendi recusandae qui tempore deserunt!
							</p>
							<div className='pr-3'>
								<img
									className='w-full md:h-[450px] h-auto object-cover rounded-xl mt-6'
									src='images/work_images/2.jpg'
									alt='portfolio image'
								/>
							</div>
						</div>
						<a
							href='#close-modal'
							rel='modal:close'
							className='close bg-close-light dark:bg-close-dark'
						>
							Close
						</a>
					</div>
					{/* portfolio items three start */}
					<div className='portfolio_list-two-items isotop-item plugin '>
						<div className='rounded-lg bg-[#fff3fc] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]'>
							<div className='overflow-hidden rounded-lg'>
								<a href='#portfiloThree' rel='modal:open'>
									<img
										className='w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto'
										src='images/work_images/small/3.jpg'
										alt='portfolio image'
									/>
								</a>
							</div>
							<span className='pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]'>
								UI/UX
							</span>
							<h2 className='font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2'>
								<a href='#portfiloThree' rel='modal:open'>
									T-Shirt Design
								</a>
							</h2>
						</div>
					</div>
					{/* modal start for item three start */}
					<div id='portfiloThree' className='modal-container modal'>
						<div className='overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight'>
							<h2 className='text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold'>
								T-Shirt Design Project
							</h2>
							<div className='grid grid-cols-1 lg:grid-cols-2 my-6 pr-3'>
								<div className='space-y-2'>
									<p className='dark:text-white flex items-center text-[15px] sm:text-lg'>
										<i className='fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl' />
										Project :&nbsp;
										<span className='font-medium'> Website</span>
									</p>
									<p className='dark:text-white flex items-center text-[15px] sm:text-lg'>
										<i className='fa-solid fa-code text-lg mr-2 hidden sm:block' />
										Langages :&nbsp;
										<span className='font-medium'>Photoshop, Figma</span>
									</p>
								</div>
								<div className='space-y-2'>
									<p className='dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg'>
										<i className='fa-regular fa-user text-lg mr-2 hidden sm:block' />
										Client :&nbsp; <span className='font-medium'>Envato</span>
									</p>
									<p className='dark:text-white flex items-center text-[15px] sm:text-lg'>
										<i className='fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block' />
										Preview :&nbsp;
										<span className='font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]'>
											<a href='#/' target='_blank' rel='noopener noreferrer'>
												www.envato.com
											</a>
										</span>
									</p>
								</div>
							</div>
							<p className='dark:text-white text-2line font-normal text-[15px] sm:text-sm'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Mollitia placeat magnam possimus iusto blanditiis pariatur
								labore explicabo quo repellat hic dolorum numquam asperiores,
								voluptatum fugiat reiciendis aspernatur, non, odio aperiam
								voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni
								distinctio dolorum dolore natus, vel numquam accusamus. Nostrum
								eligendi recusandae qui tempore deserunt!
							</p>
							<div className='pr-3'>
								<img
									className='w-full md:h-[450px] h-auto object-cover rounded-xl mt-6'
									src='images/work_images/3.jpg'
									alt='portfolio image'
								/>
							</div>
						</div>
						<a
							href='#close-modal'
							rel='modal:close'
							className='close bg-close-light dark:bg-close-dark'
						>
							Close
						</a>
					</div>
					{/* portfolio items four start */}
					<div className='portfolio_list-two-items isotop-item dev custom '>
						<div className='rounded-lg p-6 bg-[#e9faff] dark:bg-transparent dark:border-[2px] border-[#212425]'>
							<div className='overflow-hidden rounded-lg'>
								<a href='#portfiloFour' rel='modal:open'>
									<img
										className='w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto'
										src='images/work_images/small/4.jpg'
										alt='portfolio image'
									/>
								</a>
							</div>
							<span className='pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]'>
								UI/UX
							</span>
							<h2 className='font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2'>
								<a href='#portfiloFour' rel='modal:open'>
									Packaging Box
								</a>
							</h2>
						</div>
					</div>
					{/* modal start for item one start */}
					<div id='portfiloFour' className='modal-container modal'>
						<div className='overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight'>
							<h2 className='text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold'>
								Packaging Box Project
							</h2>
							<div className='grid grid-cols-1 lg:grid-cols-2 my-6 pr-3'>
								<div className='space-y-2'>
									<p className='dark:text-white flex items-center text-[15px] sm:text-lg'>
										<i className='fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl' />
										Project :&nbsp;
										<span className='font-medium'> Website</span>
									</p>
									<p className='dark:text-white flex items-center text-[15px] sm:text-lg'>
										<i className='fa-solid fa-code text-lg mr-2 hidden sm:block' />
										Langages :&nbsp;
										<span className='font-medium'>Photoshop, Figma</span>
									</p>
								</div>
								<div className='space-y-2'>
									<p className='dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg'>
										<i className='fa-regular fa-user text-lg mr-2 hidden sm:block' />
										Client :&nbsp; <span className='font-medium'>Envato</span>
									</p>
									<p className='dark:text-white flex items-center text-[15px] sm:text-lg'>
										<i className='fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block' />
										Preview :&nbsp;
										<span className='font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]'>
											<a href='#/' target='_blank' rel='noopener noreferrer'>
												www.envato.com
											</a>
										</span>
									</p>
								</div>
							</div>
							<p className='dark:text-white text-2line font-normal text-[15px] sm:text-sm'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Mollitia placeat magnam possimus iusto blanditiis pariatur
								labore explicabo quo repellat hic dolorum numquam asperiores,
								voluptatum fugiat reiciendis aspernatur, non, odio aperiam
								voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni
								distinctio dolorum dolore natus, vel numquam accusamus. Nostrum
								eligendi recusandae qui tempore deserunt!
							</p>
							<div className='pr-3'>
								<img
									className='w-full md:h-[450px] h-auto object-cover rounded-xl mt-6'
									src='images/work_images/4.jpg'
									alt='portfolio image'
								/>
							</div>
						</div>
						<a
							href='#close-modal'
							rel='modal:close'
							className='close bg-close-light dark:bg-close-dark'
						>
							Close
						</a>
					</div>
					{/* modal start for item five start */}
					<div className='portfolio_list-two-items isotop-item branding '>
						<div className='rounded-lg bg-[#fffae9] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]'>
							<div className='overflow-hidden rounded-lg'>
								<a href='#portfiloFive' rel='modal:open'>
									<img
										className='w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto'
										src='images/work_images/small/5.jpg'
										alt='portfolio image'
									/>
								</a>
							</div>
							<span className='pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]'>
								Web Design
							</span>
							<h2 className='font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2'>
								<a href='#portfiloFive' rel='modal:open'>
									{' '}
									Aura Dione
								</a>
							</h2>
						</div>
					</div>
					{/* modal start for item five start */}
					<div id='portfiloFive' className='modal-container modal'>
						<div className='overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight'>
							<h2 className='text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold'>
								Aura Dione Project
							</h2>
							<div className='grid grid-cols-1 lg:grid-cols-2 my-6 pr-3'>
								<div className='space-y-2'>
									<p className='dark:text-white flex items-center text-[15px] sm:text-lg'>
										<i className='fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl' />
										Project :&nbsp;
										<span className='font-medium'> Website</span>
									</p>
									<p className='dark:text-white flex items-center text-[15px] sm:text-lg'>
										<i className='fa-solid fa-code text-lg mr-2 hidden sm:block' />
										Langages :&nbsp;
										<span className='font-medium'>Photoshop, Figma</span>
									</p>
								</div>
								<div className='space-y-2'>
									<p className='dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg'>
										<i className='fa-regular fa-user text-lg mr-2 hidden sm:block' />
										Client :&nbsp; <span className='font-medium'>Envato</span>
									</p>
									<p className='dark:text-white flex items-center text-[15px] sm:text-lg'>
										<i className='fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block' />
										Preview :&nbsp;
										<span className='font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]'>
											<a href='#/' target='_blank' rel='noopener noreferrer'>
												www.envato.com
											</a>
										</span>
									</p>
								</div>
							</div>
							<p className='dark:text-white text-2line font-normal text-[15px] sm:text-sm'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Mollitia placeat magnam possimus iusto blanditiis pariatur
								labore explicabo quo repellat hic dolorum numquam asperiores,
								voluptatum fugiat reiciendis aspernatur, non, odio aperiam
								voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni
								distinctio dolorum dolore natus, vel numquam accusamus. Nostrum
								eligendi recusandae qui tempore deserunt!
							</p>
							<div className='pr-3'>
								<img
									className='w-full md:h-[450px] h-auto object-cover rounded-xl mt-6'
									src='images/work_images/5.jpg'
									alt='portfolio image'
								/>
							</div>
						</div>
						<a
							href='#close-modal'
							rel='modal:close'
							className='close bg-close-light dark:bg-close-dark'
						>
							Close
						</a>
					</div>
					{/* portfolio items Six start */}
					<div className='portfolio_list-two-items isotop-item branding '>
						<div className='rounded-lg bg-[#f4f4ff] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]'>
							<div className='overflow-hidden rounded-lg'>
								<a href='#portfiloSix' rel='modal:open'>
									<img
										className='w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto'
										src='images/work_images/small/6.jpg'
										alt='portfolio image'
									/>
								</a>
							</div>
							<span className='pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]'>
								Video
							</span>
							<h2 className='font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2'>
								<a href='#portfiloSix' rel='modal:open'>
									Modern Bag Design
								</a>
							</h2>
						</div>
					</div>
					{/* modal start for item six start */}
					<div id='portfiloSix' className='modal-container modal'>
						<div className='overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight'>
							<h2 className='text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold'>
								Modern Bag Design Project
							</h2>
							<div className='grid grid-cols-1 lg:grid-cols-2 my-6 pr-3'>
								<div className='space-y-2'>
									<p className='dark:text-white flex items-center text-[15px] sm:text-lg'>
										<i className='fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl' />
										Project :&nbsp;
										<span className='font-medium'> Website</span>
									</p>
									<p className='dark:text-white flex items-center text-[15px] sm:text-lg'>
										<i className='fa-solid fa-code text-lg mr-2 hidden sm:block' />
										Langages :&nbsp;
										<span className='font-medium'>Photoshop, Figma</span>
									</p>
								</div>
								<div className='space-y-2'>
									<p className='dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg'>
										<i className='fa-regular fa-user text-lg mr-2 hidden sm:block' />
										Client :&nbsp; <span className='font-medium'>Envato</span>
									</p>
									<p className='dark:text-white flex items-center text-[15px] sm:text-lg'>
										<i className='fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block' />
										Preview :&nbsp;
										<span className='font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]'>
											<a href='#/' target='_blank' rel='noopener noreferrer'>
												www.envato.com
											</a>
										</span>
									</p>
								</div>
							</div>
							<p className='dark:text-white text-2line font-normal text-[15px] sm:text-sm'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Mollitia placeat magnam possimus iusto blanditiis pariatur
								labore explicabo quo repellat hic dolorum numquam asperiores,
								voluptatum fugiat reiciendis aspernatur, non, odio aperiam
								voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni
								distinctio dolorum dolore natus, vel numquam accusamus. Nostrum
								eligendi recusandae qui tempore deserunt!
							</p>
							<div className='pr-3'>
								<img
									className='w-full md:h-[450px] h-auto object-cover rounded-xl mt-6'
									src='images/work_images/6.jpg'
									alt='portfolio image'
								/>
							</div>
						</div>
						<a
							href='#close-modal'
							rel='modal:close'
							className='close bg-close-light dark:bg-close-dark'
						>
							Close
						</a>
					</div>
					{/* modal start for item Seven start */}
					<div className='portfolio_list-two-items isotop-item plugin '>
						<div className='rounded-lg bg-[#f4f4ff] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]'>
							<div className='overflow-hidden rounded-lg'>
								<a href='#portfiloSeven' rel='modal:open'>
									<img
										className='w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto'
										src='images/work_images/small/7.jpg'
										alt='portfolio image'
									/>
								</a>
							</div>
							<span className='pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]'>
								Video
							</span>
							<h2 className='font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2'>
								<a href='#portfiloSeven' rel='modal:open'>
									{' '}
									Chul urina{' '}
								</a>
							</h2>
						</div>
					</div>
					{/* modal start for item Seven start */}
					<div id='portfiloSeven' className='modal-container modal'>
						<div className='overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight'>
							<h2 className='text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold'>
								UI/UX Project
							</h2>
							<div className='grid grid-cols-1 lg:grid-cols-2 my-6 pr-3'>
								<div className='space-y-2'>
									<p className='dark:text-white flex items-center text-[15px] sm:text-lg'>
										<i className='fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl' />
										Project :&nbsp;
										<span className='font-medium'> Website</span>
									</p>
									<p className='dark:text-white flex items-center text-[15px] sm:text-lg'>
										<i className='fa-solid fa-code text-lg mr-2 hidden sm:block' />
										Langages :&nbsp;
										<span className='font-medium'>Photoshop, Figma</span>
									</p>
								</div>
								<div className='space-y-2'>
									<p className='dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg'>
										<i className='fa-regular fa-user text-lg mr-2 hidden sm:block' />
										Client :&nbsp; <span className='font-medium'>Envato</span>
									</p>
									<p className='dark:text-white flex items-center text-[15px] sm:text-lg'>
										<i className='fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block' />
										Preview :&nbsp;
										<span className='font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]'>
											<a href='#/' target='_blank' rel='noopener noreferrer'>
												www.envato.com
											</a>
										</span>
									</p>
								</div>
							</div>
							<p className='dark:text-white text-2line font-normal text-[15px] sm:text-sm'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Mollitia placeat magnam possimus iusto blanditiis pariatur
								labore explicabo quo repellat hic dolorum numquam asperiores,
								voluptatum fugiat reiciendis aspernatur, non, odio aperiam
								voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni
								distinctio dolorum dolore natus, vel numquam accusamus. Nostrum
								eligendi recusandae qui tempore deserunt!
							</p>
							<div className='pr-3'>
								<img
									className='w-full md:h-[450px] h-auto object-cover rounded-xl mt-6'
									src='images/work_images/7.jpg'
									alt='portfolio image'
								/>
							</div>
						</div>
						<a
							href='#close-modal'
							rel='modal:close'
							className='close bg-close-light dark:bg-close-dark'
						>
							Close
						</a>
					</div>
					{/* portfolio items Eight start */}
					<div className='portfolio_list-two-items isotop-item dev branding '>
						<div className='rounded-lg bg-[#f4f4ff] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]'>
							<div className='overflow-hidden rounded-lg'>
								<a href='#portfiloEight' rel='modal:open'>
									<img
										className='w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto'
										src='images/work_images/small/8.jpg'
										alt='portfolio image'
									/>
								</a>
							</div>
							<span className='pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]'>
								Video
							</span>
							<h2 className='font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2'>
								<a href='#portfiloEight' rel='modal:open'>
									{' '}
									Chul urina{' '}
								</a>
							</h2>
						</div>
					</div>
					{/* modal start for item Eight start */}
					<div id='portfiloEight' className='modal-container modal'>
						<div className='overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight'>
							<h2 className='text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold'>
								UI/UX Project
							</h2>
							<div className='grid grid-cols-1 lg:grid-cols-2 my-6 pr-3'>
								<div className='space-y-2'>
									<p className='dark:text-white flex items-center text-[15px] sm:text-lg'>
										<i className='fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl' />
										Project :&nbsp;
										<span className='font-medium'> Website</span>
									</p>
									<p className='dark:text-white flex items-center text-[15px] sm:text-lg'>
										<i className='fa-solid fa-code text-lg mr-2 hidden sm:block' />
										Langages :&nbsp;
										<span className='font-medium'>Photoshop, Figma</span>
									</p>
								</div>
								<div className='space-y-2'>
									<p className='dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg'>
										<i className='fa-regular fa-user text-lg mr-2 hidden sm:block' />
										Client :&nbsp; <span className='font-medium'>Envato</span>
									</p>
									<p className='dark:text-white flex items-center text-[15px] sm:text-lg'>
										<i className='fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block' />
										Preview :&nbsp;
										<span className='font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]'>
											<a href='#/' target='_blank' rel='noopener noreferrer'>
												www.envato.com
											</a>
										</span>
									</p>
								</div>
							</div>
							<p className='dark:text-white text-2line font-normal text-[15px] sm:text-sm'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Mollitia placeat magnam possimus iusto blanditiis pariatur
								labore explicabo quo repellat hic dolorum numquam asperiores,
								voluptatum fugiat reiciendis aspernatur, non, odio aperiam
								voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni
								distinctio dolorum dolore natus, vel numquam accusamus. Nostrum
								eligendi recusandae qui tempore deserunt!
							</p>
							<div className='pr-3'>
								<img
									className='w-full md:h-[450px] h-auto object-cover rounded-xl mt-6'
									src='images/work_images/8.jpg'
									alt='portfolio image'
								/>
							</div>
						</div>
						<a
							href='#close-modal'
							rel='modal:close'
							className='close bg-close-light dark:bg-close-dark'
						>
							Close
						</a>
					</div>
					{/* portfolio items Nine start */}
					<div className='portfolio_list-two-items isotop-item plugin custom '>
						<div className='rounded-lg bg-[#fff0f8] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]'>
							<div className='overflow-hidden rounded-lg'>
								<a href='#portfiloNine' rel='modal:open'>
									<img
										className='w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto'
										src='images/work_images/small/9.jpg'
										alt='portfolio image'
									/>
								</a>
							</div>
							<span className='pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]'>
								Web Design
							</span>
							<h2 className='font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2'>
								<a href='#portfiloNine' rel='modal:open'>
									{' '}
									Aura Dione{' '}
								</a>
							</h2>
						</div>
					</div>
					{/* modal start for item Nine start */}
					<div id='portfiloNine' className='modal-container modal'>
						<div className='overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight'>
							<h2 className='text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold'>
								Aura Dione Project
							</h2>
							<div className='grid grid-cols-1 lg:grid-cols-2 my-6 pr-3'>
								<div className='space-y-2'>
									<p className='dark:text-white flex items-center text-[15px] sm:text-lg'>
										<i className='fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl' />
										Project :&nbsp;
										<span className='font-medium'> Website</span>
									</p>
									<p className='dark:text-white flex items-center text-[15px] sm:text-lg'>
										<i className='fa-solid fa-code text-lg mr-2 hidden sm:block' />
										Langages :&nbsp;
										<span className='font-medium'>Photoshop, Figma</span>
									</p>
								</div>
								<div className='space-y-2'>
									<p className='dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg'>
										<i className='fa-regular fa-user text-lg mr-2 hidden sm:block' />
										Client :&nbsp; <span className='font-medium'>Envato</span>
									</p>
									<p className='dark:text-white flex items-center text-[15px] sm:text-lg'>
										<i className='fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block' />
										Preview :&nbsp;
										<span className='font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]'>
											<a href='#/' target='_blank' rel='noopener noreferrer'>
												www.envato.com
											</a>
										</span>
									</p>
								</div>
							</div>
							<p className='dark:text-white text-2line font-normal text-[15px] sm:text-sm'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Mollitia placeat magnam possimus iusto blanditiis pariatur
								labore explicabo quo repellat hic dolorum numquam asperiores,
								voluptatum fugiat reiciendis aspernatur, non, odio aperiam
								voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni
								distinctio dolorum dolore natus, vel numquam accusamus. Nostrum
								eligendi recusandae qui tempore deserunt!
							</p>
							<div className='pr-3'>
								<img
									className='w-full md:h-[450px] h-auto object-cover rounded-xl mt-6'
									src='images/work_images/9.jpg'
									alt='portfolio image'
								/>
							</div>
						</div>
						<a
							href='#close-modal'
							rel='modal:close'
							className='close bg-close-light dark:bg-close-dark'
						>
							Close
						</a>
					</div>
				</div>
			</div>
			{/* footer start */}
			<footer className='overflow-hidden rounded-b-2xl bg-[#f8fbfb] dark:bg-[#212425]'>
				<p className='text-center py-6 text-gray-lite dark:text-color-910'>
					© 2022 All Rights Reserved by
					<a
						className='hover:text-[#FA5252] duration-300 transition'
						href='#'
						target='_blank'
						rel='noopener noreferrer'
					>
						Drz-themes
					</a>
					.
				</p>
			</footer>
			{/* footer ends */}
		</section>
	);
};

export default WorksPage;
