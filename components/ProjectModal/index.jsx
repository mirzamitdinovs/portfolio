import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import Slider from 'react-slick';
import clientsData from '../../data/clients.data';
import CustomModal from '../Modal';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
const settings = {
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	dots: false,
	arrows: true,
};
const ProjectModal = (props, ref) => {
	const [item, setItem] = useState({});
	const modalRef = useRef(null);

	useImperativeHandle(ref, () => ({
		open: (selected) => {
			setItem(selected);
			modalRef.current.open();
		},
	}));

	return (
		<CustomModal ref={modalRef}>
			{Object.keys(item).length ? (
				<div className='dark:scrollbarDark scrollbarLight overflow-x-hidden overflow-y-scroll max-h-[60vh] lg:max-h-[80vh]'>
					<div className='pr-3 pb-2'>
						<Slider {...settings}>
							{item.fields.images?.map((image, index) => (
								<div key={index} className='h-80 w-full'>
									<img
										className='h-full w-full object-cover'
										src={image.fields.file.url}
										alt='brand'
									/>
								</div>
							))}
						</Slider>
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
					<div className='col-span-1 mb-10'>
						<h6 className='text-3xl dark:text-white font-medium mb-8'>
							Skills &amp; Technologies
						</h6>
						<div className='flex gap-x-3 gap-y-3 md:gap-y-3 md:gap-x-3 flex-wrap'>
							{item.fields?.skills?.map((skill, index) => (
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

export default forwardRef(ProjectModal);
