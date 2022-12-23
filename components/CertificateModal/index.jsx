import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import CustomModal from '../Modal';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
const CertificateModal = (props, ref) => {
	const [item, setItem] = useState(null);
	const modalRef = useRef(null);

	useImperativeHandle(ref, () => ({
		open: (certItem) => {
			setItem(certItem);
			modalRef.current.open();
		},
	}));

	return (
		<CustomModal ref={modalRef}>
			{item ? (
				<div className='dark:scrollbarDark scrollbarLight overflow-y-scroll max-h-[60vh] lg:max-h-[80vh]'>
					<div className='pr-3 pb-2'>
						<img
							className='w-full md:h-[450px] object-cover rounded-xl mt-6'
							src={item.fields.image.fields.file.url}
							alt='blog image'
						/>
						<h2 className='dark:text-white sm:text-3xl mt-4 font-medium underline text-blue-500'>
							<a
								target={'_blank'}
								rel='noopener noreferrer'
								href={item.fields.link}
							>
								{item.fields?.title}
							</a>
						</h2>
						<div className='dark:text-white font-normal my-4'>
							{documentToReactComponents(item.fields?.description)}
						</div>
					</div>
					<div className='col-span-1'>
						<h6 className='text-3xl dark:text-white font-medium mb-8'>
							Skills &amp; Technologies{' '}
						</h6>
						<div className='flex gap-x-3 gap-y-3 md:gap-y-3 md:gap-x-3 flex-wrap'>
							{item.fields.skills?.map((skill, index) => (
								<button key={index} className='resume-btn'>
									{skill.fields.title}
								</button>
							))}
						</div>
					</div>
				</div>
			) : null}
		</CustomModal>
	);
};

export default forwardRef(CertificateModal);
