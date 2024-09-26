import { forwardRef, useImperativeHandle, useState } from 'react';
import { StarsCanvas } from './canvas';
import { close } from '../assets';
const WorkModal = (props, ref) => {
	const [toggle, setToggle] = useState(false);
	const [data, setData] = useState(null);

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
				<div className='absolute right-5 top-5'>
					<button onClick={closeModal}>
						<img
							src={close}
							alt='close'
							className='w-[20px] h-[20px] object-contain'
						/>
					</button>
				</div>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
					<div>
						<h3 className='font-medium font-base-font text-white text-[35px] leading-[130.5%] mb-[20px] md:text-[25px] '>
							{data.title}
						</h3>
						<p className='text-[16px] leading-[26px] font-normal text-[#D8D8D8] mb-[20px]'>
							{data.description}
						</p>
					</div>
					<div className=''>
						<div className='max-w-[380px] ml-auto flex-[35%] lg:flex-[100%] mb-[50px] lg:mb-[40px] shadow-[0_8px_17px_0_rgba(0,0,0,20%),0_6px_20px_0_rgba(0,0,0,19%)] md:ml-0 md:max-w-full md:mt-[20px]'>
							<ul className='py-[50px] px-[30px] shadow-[0px_2px_10px_rgba(14,29,44,0.15)] md:ml-0 md:max-w-full col:py-[50px] col:px-[20px]'>
								<li className='flex pb-[10px] text-[16px] text-white font-semibold relative justify-between '>
									Location :
									<span className='text-[#D8D8D8] font-normal'>
										7 Lake Street,London
									</span>
								</li>
								<li className='flex py-[10px] text-[16px] text-white font-semibold relative justify-between '>
									Client :
									<span className='text-[#D8D8D8] font-normal'>wpOceans</span>
								</li>
								<li className='flex py-[10px] text-[16px] text-white font-semibold relative justify-between '>
									Architect :
									<span className='text-[#D8D8D8] font-normal'>
										Harry Johnson
									</span>
								</li>
								<li className='flex py-[10px] text-[16px] text-white font-semibold relative justify-between '>
									Project Type :
									<span className='text-[#D8D8D8] font-normal'>
										Softwere Development
									</span>
								</li>
								<li className='flex py-[10px] text-[16px] text-white font-semibold relative justify-between '>
									Duration :
									<span className='text-[#D8D8D8] font-normal'>6 Month</span>
								</li>
								<li className='flex py-[10px] text-[16px] text-white font-semibold relative justify-between '>
									Completion :
									<span className='text-[#D8D8D8] font-normal'>
										15 Apr 2022
									</span>
								</li>
								<li className='flex pt-[10px] text-[16px] text-white font-semibold relative justify-between '>
									Share :
									<span className='text-[#D8D8D8] font-normal'>
										Web App, Marketing
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-[15px]'>
					<div className=''>
						<h3 className='font-medium font-base-font text-white text-[35px] leading-[130.5%] mb-[20px] md:text-[25px]'>
							Resieved goals
						</h3>
						<p className='text-[16px] leading-[26px] font-normal col:text-[14px] text-[#D8D8D8] mb-[20px]'>
							Massa volutpat odio facilisis purus sit elementum. Non, sed velit
							dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper
							tincidunt. Id aliquet duis sollicitudin diam.
						</p>
						<ul>
							<li className="py-[10px] text-white pl-[35px] col:text-[14px] relative before:absolute before:left-0 before:top-1/2 before:transform before:w-[25px] before:h-[25px] before:leading-[25px] before:rounded-[50%] before:text-center before:text-[14px] before:text-[#59C378] before:bg-[#59c3781a] before:-translate-y-1/2 before:font-['themify'] before:content-['\e64c']">
								Non saed velit dictum quam risus pharetra esta.
							</li>
							<li className="py-[10px] text-white pl-[35px] col:text-[14px] relative before:absolute before:left-0 before:top-1/2 before:transform before:w-[25px] before:h-[25px] before:leading-[25px] before:rounded-[50%] before:text-center before:text-[14px] before:text-[#59C378] before:bg-[#59c3781a] before:-translate-y-1/2 before:font-['themify'] before:content-['\e64c']">
								Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.
							</li>
							<li className="py-[10px] text-white pl-[35px] col:text-[14px] relative before:absolute before:left-0 before:top-1/2 before:transform before:w-[25px] before:h-[25px] before:leading-[25px] before:rounded-[50%] before:text-center before:text-[14px] before:text-[#59C378] before:bg-[#59c3781a] before:-translate-y-1/2 before:font-['themify'] before:content-['\e64c']">
								Hac nibh fermentum nisi, platea condimentum cursus.
							</li>
							<li className="py-[10px] text-white pl-[35px] col:text-[14px] relative before:absolute before:left-0 before:top-1/2 before:transform before:w-[25px] before:h-[25px] before:leading-[25px] before:rounded-[50%] before:text-center before:text-[14px] before:text-[#59C378] before:bg-[#59c3781a] before:-translate-y-1/2 before:font-['themify'] before:content-['\e64c']">
								Massa volutpat odio facilisis purus sit elementum.
							</li>
						</ul>
					</div>
					<div className='md:mt-[40px]'>
						<h3 className='font-medium font-base-font text-white text-[35px] leading-[130.5%] mb-[20px] md:text-[25px]'>
							Results
						</h3>
						<p className='text-[16px] leading-[26px] font-normal text-[#D8D8D8] mb-[20px]'>
							Massa volutpat odio facilisis purus sit elementum. Non, sed velit
							dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper
							tincidunt. Id aliquet duis sollicitudin diam.
						</p>
						<ul>
							<li className="py-[10px] text-white pl-[35px] col:text-[14px] relative before:absolute before:left-0 before:top-1/2 before:transform before:w-[25px] before:h-[25px] before:leading-[25px] before:rounded-[50%] before:text-center before:text-[14px] before:text-[#59C378] before:bg-[#59c3781a] before:-translate-y-1/2 before:font-['themify'] before:content-['\e64c']">
								Mauris dignissim blandit cursus imperdiet accumsan lorem.
							</li>
							<li className="py-[10px] text-white pl-[35px] col:text-[14px] relative before:absolute before:left-0 before:top-1/2 before:transform before:w-[25px] before:h-[25px] before:leading-[25px] before:rounded-[50%] before:text-center before:text-[14px] before:text-[#59C378] before:bg-[#59c3781a] before:-translate-y-1/2 before:font-['themify'] before:content-['\e64c']">
								Nam id in non sed cras purus nunc et.
							</li>
							<li className="py-[10px] text-white pl-[35px] col:text-[14px] relative before:absolute before:left-0 before:top-1/2 before:transform before:w-[25px] before:h-[25px] before:leading-[25px] before:rounded-[50%] before:text-center before:text-[14px] before:text-[#59C378] before:bg-[#59c3781a] before:-translate-y-1/2 before:font-['themify'] before:content-['\e64c']">
								Mauris orci, cursus nisl odio est adipiscing gravida magna eget.
							</li>
							<li className="py-[10px] text-white pl-[35px] col:text-[14px] relative before:absolute before:left-0 before:top-1/2 before:transform before:w-[25px] before:h-[25px] before:leading-[25px] before:rounded-[50%] before:text-center before:text-[14px] before:text-[#59C378] before:bg-[#59c3781a] before:-translate-y-1/2 before:font-['themify'] before:content-['\e64c']">
								Quis mauris vel felis convallis nulla dignissim.
							</li>
						</ul>
					</div>
				</div>
			</div>
			<StarsCanvas />
		</div>
	);
};

export default forwardRef(WorkModal);
