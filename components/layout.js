import Footer from "./footer";
import Meta from "./meta";
import Head from "next/head";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      {/*<Footer />*/}
    </>
  );
}
