import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Services from '../components/Services'
import IntroSidebar from '../components/IntroSidebar'
import Header from '../components/Header'
import ProjectsIntro from '../components/ProjectsIntro'
import Contacts from '../components/Contacts'


export default function Home() {

  return (
    <Layout>
      <Head>
        <title>Portfolio - Antonio Bertoni</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <IntroSidebar />
        <Header/>
        <Services/>
        <ProjectsIntro />
        <Contacts />
      </div>
    </Layout>
  )
}

/* Contribuzione nel footer: <a href="https://www.flaticon.com/free-icons/web-development" title="web development icons">Web development icons created by Freepik - Flaticon</a> */
