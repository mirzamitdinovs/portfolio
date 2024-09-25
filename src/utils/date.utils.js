import dayjs from 'dayjs';

export const FORMAT_DATE = (current) => {
	if (!current || !dayjs(current).isValid()) return '';
	const date = dayjs(current); // Create a Day.js instance
	return date.format('MMM YYYY'); // Example: "Sep 2024"
};
