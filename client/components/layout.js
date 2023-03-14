import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="gradient__bg main-container">
      <Head>
        <title>Visit Kennedy Town</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
