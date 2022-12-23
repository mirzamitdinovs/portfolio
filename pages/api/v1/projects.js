// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { createClient } from 'contentful';

export default async function handler(req, res) {
	const spaceId = process.env.CONTENTFUL_SPACE_ID;
	const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
	const client = createClient({
		space: spaceId,
		accessToken: accessToken,
	});

	const response = await client.getEntries({ content_type: 'projects' });

	res.status(200).json(response.items);
}
