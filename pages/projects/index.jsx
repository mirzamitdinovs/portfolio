import { useContext, useRef } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import ProjectModal from '../../components/ProjectModal';
import projectsData from '../../data/projects.data';
import Footer from '../../components/Footer';
import ProjectsContext from '../../contexts/ProjectsContext';
import Loader from '../../components/Loader';
import Image from 'next/image';
const Projects = () => {
	const { projects } = useContext(ProjectsContext);
	const modalRef = useRef(null);

	if (!projects) {
		return <Loader />;
	}
	return (
		<div>
			<div className='bg-white lg:rounded-2xl dark:bg-[#111111]'>
				<div className='container px-4 sm:px-5 md:px-10 lg:px-[60px]'>
					<div className='py-12'>
						<h2 className='after-effect after:left-40 mt-12 lg:mt-0'>
							Projects
						</h2>
						<div className='grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[30px] grid gap-x-10 gap-y-7 mb-6'>
							{projects.map((item, index) => (
								<div
									key={index}
									onClick={() => modalRef.current.open(item)}
									className='p-1  rounded-lg mb-2 h-full bg-[#fcf4ff] dark:bg-transparent dark:border-[#212425] dark:border-2'
								>
									<div className='overflow-hidden  rounded-lg'>
										<Image
											className='rounded-lg w-full object-cover h-40 cursor-pointer transition duration-200 ease-in-out transform hover:scale-110'
											src={`https:${item.fields.images[0].fields.file.url}`}
											alt='blog image'
											width={300}
											height={160}
										/>
									</div>
									<div className='px-2 flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]'>
										<span>{item.fields.category}</span>
									</div>
									<h3 className='text-lg px-2 font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]'>
										{item.fields.title}
									</h3>
								</div>
							))}
						</div>
					</div>
				</div>
				<Footer />
				<ProjectModal ref={modalRef} />
			</div>
		</div>
	);
};

export default Projects;
