import Link from 'next/link'
import Head from 'next/head'
import Navbar from "./navbar";
import Footer from "./footer";
import Signup from "./newsletter-signup";


export const Layout = (props) => {
  return (
    <div className="relative overflow-hidden dark:bg-stone-800">
      <Head>
        <title>Scott Gallant </title>
        <meta name="description" content="A TinaCMS Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {props.children}
      <Footer />

    </div>
  )
}