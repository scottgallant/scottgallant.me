import Link from 'next/link'
import Head from 'next/head'
import Navbar from "./navbar";
import Footer from "./footer";
import Signup from "./newsletter-signup";


export const Layout = (props) => {
  return (
    <div className="relative overflow-hidden dark:bg-gray-800 dark:text-gray-300">
      <Head>
        <title>Scott Gallant </title>
        <meta name="description" content="A personal blog" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://platform.twitter.com/widgets.js" charSet="utf-8" defer={true}></script>
      </Head>
      <Navbar />
      {props.children}
      <Footer />

    </div>
  )
}