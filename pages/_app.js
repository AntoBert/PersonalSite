import '../styles/globals.css'
import { Nunito } from '@next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

/* _app.js è un componente React di primo livello che esegue il wrapping di tutte le pagine nella tua applicazione. 
Puoi utilizzare questo componente per mantenere lo stato durante la navigazione tra le pagine o per aggiungere stili globali  */
export default function App({ Component, pageProps }) {
  return (
    <main className={nunito.className}>
      <Component {...pageProps} />
    </main>
  )
}
