import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
const CertificatesContext = createContext();

export const CertificatesProvider = ({ children }) => {
	const [certificates, setCertificates] = useState(null);

	useEffect(() => {
		if (!certificates) {
			getCertificates();
		}
	}, []);

	const getCertificates = async () => {
		const res = await axios.get('/api/v1/certificates');
		setCertificates(res.data);
	};

	return (
		<CertificatesContext.Provider value={{ certificates }}>
			{children}
		</CertificatesContext.Provider>
	);
};

export default CertificatesContext;
