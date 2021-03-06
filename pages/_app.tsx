// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import Layout from '../components/Layout/Layout';
import { AuthProvider } from '../contexts/auth';
import { I18nProvider } from '../contexts/i18n'

// styles
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <I18nProvider>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </I18nProvider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp
