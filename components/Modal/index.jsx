import React, { forwardRef, useImperativeHandle, useState } from 'react';

function CustomModal({ children }, ref) {
	const [toggle, setToggle] = useState(false);

	const open = () => setToggle(true);
	const close = () => setToggle(false);

	useImperativeHandle(ref, () => ({
		open,
	}));

	if (!toggle) {
		return null;
	}
	return (
		<div className='fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center h-screen'>
			<div
				onClick={close}
				className='absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-30'
			></div>
			<div className='w-6/12 z-50 rounded-xl shadow-sm bg-white p-10 relative'>
				<div className='flex justify-end mr-5 text-white absolute top-[-15px] right-[-35px]'>
					<button
						type='button'
						onClick={close}
						className='w-12 h-12 rounded-full border-2 border-red-500 bg-red-500 shadow-lg'
					>
						<i
							id='menu-toggle-close-icon'
							class='fa-solid fa-xmark text-3xl   '
						></i>
					</button>
				</div>
				{children}
			</div>
		</div>
	);
}

export default forwardRef(CustomModal);
