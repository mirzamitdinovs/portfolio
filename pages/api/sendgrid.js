import emailjs from '@emailjs/browser';

async function sendEmail(req, res) {
	console.log(
		'data: ',
		process.env.EMAILJS_SERVICE_ID,
		process.env.EMAILJS_TEMPLATE_ID,
		`<div>${JSON.stringify(req.body)}</div>`,
		process.env.EMAILJS_PUBLIC_KEY
	);
	try {
		const res = await emailjs.sendForm(
			process.env.EMAILJS_SERVICE_ID,
			process.env.EMAILJS_TEMPLATE_ID,
			`<div>${JSON.stringify(req.body)}</div>`,
			process.env.EMAILJS_PUBLIC_KEY
		);

		console.log('success: ', res);
	} catch (error) {
		console.log('error: ', error);
		return res.status(error.statusCode || 500).json({ error: error.message });
	}

	return res.status(200).json({ error: '' });
}

export default sendEmail;
