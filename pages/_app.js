import '~/styles/index.css'
import { Analytics } from '~/components/Analytics'
import Head from 'next/head'

const isProd =
  !process.env.NEXT_PUBLIC_DEPLOYMENT_ENV ||
  process.env.NEXT_PUBLIC_DEPLOYMENT_ENV === 'production'

const Env = () => (
  <div className="bg-red rounded-md p-2 absolute m-4 text-white bottom-0">
    <small>ENV:</small>{' '}
    <strong>{process.env.NEXT_PUBLIC_DEPLOYMENT_ENV}</strong>
  </div>
)

function App({ Component, pageProps }) {
  return (
    <>
      <Analytics />
      <Head>
        <title>Codar.me - Desenvolvendo software de verdade</title>
      </Head>
      {!isProd && <Env />}
      <Component {...pageProps} />
    </>
  )
}

export default App
