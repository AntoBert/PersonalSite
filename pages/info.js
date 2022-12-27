import Head from 'next/head'
import styles from '../styles/Info.module.css'
import Layout from '../components/Layout'
import Contribution from '../components/Contribution'




export default function Home() {

    const presentazione = "Laureando in ingegneria Elettronica con una grande passione per il settore informatico. Lavoro come Digital Data Architect presso un'azienda di consulenza di Milano che opera nel settore ICT. Le competenze sviluppate nel ramo Digital riguardano l'utilizzo della piattaforma Adobe e in particolare l'implementazione attraverso Adobe Tag Manager dei tag di tracciamento necessari a raccogliere informazioni riguardanti le interazioni degli utenti all'interno del sito web. Altra mansione importante è la realizzazione di Test mediante Adobe Target allo scopo di testare versioni alternative del sito e individuarne la più performante.";
    const webDev = "Ho iniziato ad interessarmi allo sviluppo web nel 2020 quando insieme ad alcuni amici abbiamo deciso di avviare una startup nel settore ICT. Il primo progetto a cui stiamo lavorando riguarda il settore della ristorazione e permette la prenotazione direttamente dal tavolo con l'ausilio di un chip NFC che indirizza gli utenti verso una web application. L'utilizzo di questa tecnologia garantisce una maggiore sicurezza rispetto ai metodi utilizzati attualmente senza la necessità per il cliente di effettuare una registrazione. Il progetto è in fase di completamento ed è stato realizzato seguendo il flusso MERN (Mongo - Express - React - Node).";
    const textContribution = "Additional Stock Footage Provided By Videezy!";
    const link = 'http://www.videezy.com';
    
    return (
        <Layout>
            <Head>
                <title>Portfolio - Antonio Bertoni - Info</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.main}>

                <div className={styles.left}>
                    <h2 className={styles.title}>Info</h2>
                    <p>{presentazione}</p>
                    <h2 className={styles.title}>Sviluppo Web</h2>
                    <p>{webDev}</p>
                </div>

                <div className={styles.right}>
                    <video 
                        src="/images/backgroundWhiteSquare.webm"
                        className={styles.video}
                        autoPlay
                        muted
                        loop
                    />
                </div>
                <Contribution textContrib={textContribution} link={link} />
            </div>
        </Layout>
    )
}



/* Contribuzione nel footer: <a href="https://www.flaticon.com/free-icons/web-development" title="web development icons">Web development icons created by Freepik - Flaticon</a> */