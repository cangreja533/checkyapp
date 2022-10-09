import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { Web3ReactProvider } from '@web3-react/core';

function getLibrary(provider) {
  return new Web3Provider(provider);
}

function MyApp({ Component, pageProps }) {

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className='bg-lens-100'>
        <Component {...pageProps} />
        {/* <Web3Modal config={config} /> */}
      </div>
    </Web3ReactProvider>
  )
}

export default MyApp

