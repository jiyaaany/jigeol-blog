import '../styles/globals.css'
import '../scss/main.scss'
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppProps } from 'next/app'
import Layout from '../components/Layout';

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
