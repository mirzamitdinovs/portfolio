import Link from 'next/link';
import { useRouter } from 'next/router';
import navbarData from '../../data/navbar.data';
const Navbar = () => {
	const { asPath } = useRouter();
	return (
		<header className='flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1111111111]'>
			<div className='flex justify-between w-full px-4 lg:px-0 bg-[#F3F6F6] lg:bg-transparent dark:bg-black'>
				<div className='flex justify-between w-full items-center space-x-4 lg:my-8 my-5'>
					{/* website logo */}
					<Link href='/' className='text-3xl font-semibold text-[#EC6187]'>
						<img className='h-[26px] lg:h-[32px]' src='logo.png' alt='logo' />
						{/* devsayyod */}
					</Link>
					<div className='flex items-center'>
						{/* light and dark mode button */}
						<button
							id='theme-toggle-mobile'
							type='button'
							className='dark-light-btn lg:hidden w-[44px] h-[44px] ml-2'
						>
							<i
								id='theme-toggle-dark-icon-mobile'
								className='fa-solid text-xl fa-moon hidden'
							/>
							<i
								id='theme-toggle-light-icon-mobile'
								className='fa-solid fa-sun text-xl hidden'
							/>
						</button>
						{/* mobile toggle button */}
						<button id='menu-toggle' type='button' className='menu-toggle-btn'>
							<i
								id='menu-toggle-open-icon'
								className='fa-solid fa-bars text-xl '
							/>
							<i
								id='menu-toggle-close-icon'
								className='fa-solid fa-xmark text-xl hidden  '
							/>
						</button>
					</div>
				</div>
			</div>
			<nav className='hidden lg:block'>
				<ul className='flex my-12'>
					{navbarData.map((item, index) => (
						<li key={index}>
							<Link
								href={item.path}
								className={
									asPath === item.path
										? 'menu-item-two-active'
										: 'menu-item-two'
								}
							>
								<span className='mr-2 text-base'>{item.icon}</span> {item.title}
							</Link>
						</li>
					))}

					<li>
						<button
							id='theme-toggle'
							type='button'
							className='dark-light-btn w-[44px] h-[44px] ml-2'
						>
							<i
								id='theme-toggle-dark-icon'
								className='fa-solid text-xl fa-moon hidden'
							/>
							<i
								id='theme-toggle-light-icon'
								className='fa-solid fa-sun text-xl hidden'
							/>
						</button>
					</li>
				</ul>
			</nav>
			<nav id='navbar' className='hidden lg:hidden'>
				<ul className='block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#1d1d1d]'>
					{navbarData.map((item, index) => (
						<li key={index}>
							<Link
								href={item.path}
								className={
									asPath === item.path
										? 'mobile-menu-items-active'
										: 'mobile-menu-items'
								}
							>
								<span className='mr-2 text-xl'>{item.icon}</span> {item.title}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
