import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import CustomModal from '../Modal';
const CertificateModal = (props, ref) => {
	const [item, setItem] = useState({});
	const modalRef = useRef(null);

	useImperativeHandle(ref, () => ({
		open: (certItem) => {
			setItem(certItem);
			modalRef.current.open();
		},
	}));

	return (
		<CustomModal ref={modalRef}>
			<div className='dark:scrollbarDark scrollbarLight overflow-y-scroll max-h-[60vh] lg:max-h-[80vh]'>
				<div className='pr-3 pb-2'>
					<img
						className='w-full md:h-[450px] object-cover rounded-xl mt-6'
						src={item.image}
						alt='blog image'
					/>
					<h2 className='dark:text-white sm:text-3xl mt-4 font-medium'>
						{item.title}
					</h2>
					<p className='dark:text-white font-normal my-4'>{item.desc}</p>
				</div>
				<div className='col-span-1'>
					<h6 className='text-3xl dark:text-white font-medium mb-8'>
						Skills &amp; Technologies{' '}
					</h6>
					<div className='flex gap-x-3 gap-y-3 md:gap-y-3 md:gap-x-3 flex-wrap'>
						{item.skills?.map((item, index) => (
							<button key={index} className='resume-btn'>
								{item}
							</button>
						))}
					</div>
				</div>
			</div>
		</CustomModal>
	);
};

export default forwardRef(CertificateModal);
