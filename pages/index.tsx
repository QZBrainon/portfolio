import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";

export type Repos = {
  name: string,
  html_url: string,
  description: string
}

export interface AboutProps {
  data: Repos[];
}

const Home: NextPage<AboutProps> = ({data}) => {
  return (
    <>
      <Head>
        <title>Brainon - Fullstack Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Brainon Queiroz" />
        <meta name="keywords" content="ReactJS, NextJS" />
        <meta name="description" content="I am a talented Fullstack developer with a business background." />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2D2E32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:site_name" content="Brainon Queiroz - Fullstack Developer" />
        <meta property="og:locale" content="en_GB" />
        <meta data-rh="true" property="og:type" content="website"/>
        <meta data-rh="true" property="og:title" content="Brainon Queiroz - Fullstack Developer"/>
        <meta data-rh="true" property="og:image" content="/images/profile_picture.jpeg"/>
      </Head>

      <Header />

      <main>
        <About />
      </main>

      <Footer />
    </>
  )
}

export default Home;