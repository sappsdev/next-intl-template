import '../styles/global.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../auth/auth_context';
import Head from 'next/head';
import {NextIntlProvider} from 'next-intl';

const AuthState = ({ children }: any) => {
  return <AuthProvider>
    {children}
  </AuthProvider>;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthState>
      <Head>
        <title>Sapps Template</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <NextIntlProvider messages={pageProps.messages}>
        <Component {...pageProps} />
      </NextIntlProvider> 
    </AuthState>
  )
}

export default MyApp
