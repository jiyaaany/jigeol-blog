import '../styles/globals.css'
import '../scss/main.scss'
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppProps } from 'next/app'

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App;
