import type { AppProps } from 'next/app';
import '../styles/buttons.css';
import '../styles/colors.css';
import '../styles/fonts.css';
import '../styles/globals.css';
import '../styles/inputs.css';
import '../styles/texts.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
