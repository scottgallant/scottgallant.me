import DynamicTina from "../.tina/components/TinaDynamicProvider";
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

const App = ({ Component, pageProps }) => {
  return (
    <DynamicTina>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </DynamicTina>
  );
};

export default App;
