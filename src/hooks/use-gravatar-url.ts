import { useState, useMemo, useEffect } from 'react';
import * as Crypto from 'expo-crypto';

const useGravatarUrl = (email: string = '') => {
	const [hash, setHash] = useState<string>('');

	useEffect(() => {
		const normalizedEmail = email.toLowerCase().trim();

		Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, normalizedEmail).then(setHash);
	}, [email]);

	const gravatarUrl = useMemo(() => {
		return `https://www.gravatar.com/avatar/${hash}?d=404`;
	}, [hash]);

	return hash ? gravatarUrl : undefined;
};

export default useGravatarUrl;
