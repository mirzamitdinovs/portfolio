import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		if (window) {
			if (
				localStorage.getItem('color-theme') === 'dark' ||
				(!('color-theme' in localStorage) &&
					window.matchMedia('prefers-color-scheme-dark)').matches)
			) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
	}, []);
	return (
		<div>
			<Head>
				{/* common meta tags */}
				<meta charSet='UTF-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
				{/*=== fontaswesome ===*/}
				<link rel='stylesheet' href='assets/fontaswesome/css/all.min.css' />
				<link
					rel='stylesheet'
					href='assets/fontaswesome/css/fontawesome.min.css'
				/>
				<link rel='preconnect' href='https://fonts.googleapis.com/' />
				<link rel='preconnect' href='https://fonts.gstatic.com/' crossOrigin />
				<link
					href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Roboto+Slab:wght@300;400;500;600;700&display=swap'
					rel='stylesheet'
				/>
				{/*=== main css ===*/}
				<link rel='stylesheet' href='css/tailwind.css' />
				<link rel='stylesheet' href='css/vendor/jquery.modal.min.css' />

				<link rel='stylesheet' href='css/custom.css' />
				<title>Sayyod Mirzamitdinov</title>
			</Head>
			<div className='bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full'>
				<div className='z-50'>
					<div className='container'>
						<Navbar />
						<Component {...pageProps} />
					</div>
				</div>
			</div>
			<Script
				strategy='beforeInteractive'
				src='js/vendor/jquary.min.js'
			></Script>

			<Script strategy='afterInteractive' src='js/main.js'></Script>
		</div>
	);
}

export default MyApp;
