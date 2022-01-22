import Script from 'next/script'
import '@styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="assets/flowbite/flowbite.bundle.js" strategy='beforeInteractive' />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
