import { useContext, useEffect, useRef, useState } from 'react';
import CertificateModal from '../../components/CertificateModal';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';
import CertificatesContext from '../../contexts/CertificatesContext';
import Image from 'next/image';
const CertificatesPage = () => {
	const { certificates } = useContext(CertificatesContext);
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState('all');

	useEffect(() => {
		if (!categories.length && certificates) {
			setCategories([
				...new Set(certificates.map((item) => item.fields.school)),
			]);
		}
	}, [certificates]);
	const modalRef = useRef(null);

	const filterData = () => {
		if (selectedCategory === 'all') {
			return certificates;
		} else {
			return certificates.filter(
				(item) => item.fields.school === selectedCategory
			);
		}
	};

	if (!certificates) {
		return <Loader />;
	}
	return (
		<section className='bg-white  lg:rounded-2xl dark:bg-[#111111]'>
			<div className='container mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]'>
				<div className='py-12'>
					<h2 className='after-effect after:left-60 mt-12 lg:mt-0'>
						Certificates
					</h2>
					{/* fillter group buttons */}
					<ul className='button-group isotop-menu-wrapper mt-[30px] flex w-full justify-start md:justify-end flex-wrap font-medium'>
						<li
							onClick={() => setSelectedCategory('all')}
							className={`fillter-btn mr-4 md:mx-4 ${
								selectedCategory === 'all' ? 'is-checked' : ''
							}`}
						>
							All
						</li>
						{categories.map((item, index) => (
							<li
								onClick={() => setSelectedCategory(item)}
								key={index}
								className={`fillter-btn mr-4 md:mx-4 ${
									selectedCategory === item ? 'is-checked' : ''
								}`}
							>
								{item}
							</li>
						))}
					</ul>
				</div>
				{/* End py-12 */}

				<div className='grid grid-cols-3 gap-4'>
					{filterData().map((item, index) => (
						<div
							key={index}
							onClick={() => modalRef.current.open(item)}
							className='portfolio_list-two-items isotop-item plugin custom '
						>
							<div
								className={`rounded-lg bg-[${
									index % 2 === 0 ? '#fcf4ff' : '#eefbff'
								}] p-1 dark:bg-transparent dark:border-[2px] border-[#212425]`}
							>
								<div className='overflow- rounded-lg'>
									<Image
										className='rounded-lg w-full object-cover h-40 cursor-pointer transition duration-200 ease-in-out transform hover:scale-110'
										src={`https:${item.fields.image.fields.file.url}`}
										alt='blog image'
										width={300}
										height={160}
									/>
								</div>
								<span className='pt-5 px-3 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]'>
									{item.fields.school}
								</span>
								<h2 className='min-h-[70px] px-3 font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2'>
									{item.fields.title}
								</h2>
							</div>
						</div>
					))}
				</div>
			</div>
			<CertificateModal ref={modalRef} />
			<Footer />
		</section>
	);
};

export default CertificatesPage;
