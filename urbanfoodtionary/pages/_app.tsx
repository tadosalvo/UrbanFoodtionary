import NavItem from './api/components/navitem';
import Landing from './api/components/landing';
import '../styles/globals.css';
import type { AppProps } from "next/app"

function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <NavItem/>
    <Component {...pageProps} />
  </>
  );
}

export default App;
