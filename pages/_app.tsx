import DynamicTina from "../.tina/components/TinaDynamicProvider";
import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
  return (
    <DynamicTina>
      <Component {...pageProps} />
    </DynamicTina>
  );
};

export default App;
