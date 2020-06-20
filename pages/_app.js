import '~/styles/index.css'
import { Analytics } from '~/components/Analytics'
import Head from 'next/head'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Codar.me - Desenvolvendo software de verdade</title>
      </Head>
      <Analytics />
      <Component {...pageProps} />
    </>
  )
}

export default App
