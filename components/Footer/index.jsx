import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

const Footer = () => {
	const { user } = useContext(UserContext);
	return (
		<footer
			className='overflow-hidden rounded-b-2xl'
			style={{ background: 'transparent' }}
		>
			<p className='text-center py-6 text-gray-lite dark:text-color-910'>
				{' '}
				© 2022 All Rights Reserved by <strong>{user.name}</strong>
			</p>
		</footer>
	);
};

export default Footer;
