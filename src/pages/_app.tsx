import type { AppProps } from 'next/app';

import { GlobalStyle } from '@/assets/styles/app';

import '@/assets/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}
