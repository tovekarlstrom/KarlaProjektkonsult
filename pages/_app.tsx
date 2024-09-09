import Layout from "../components/layout";
import StyledComponentsRegistry from "../lib/registry";
import "../styles/globals.css";

export default function App({ Component, pageProps }: any) {
  return (
    <StyledComponentsRegistry>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StyledComponentsRegistry>
  );
}
