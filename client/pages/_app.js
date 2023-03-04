import "../styles/design_tokens.css";
import "../styles/globals.css";

import { Layout } from "../components";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
