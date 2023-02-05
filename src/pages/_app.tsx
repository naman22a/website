import '@/styles/globals.scss';
import 'highlight.js/styles/base16/dracula.css';
import type { AppProps } from 'next/app';
import { Layout } from '@/components';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
