import Head from 'next/head'

import { GTM, GTMBody } from './gtm'
import { FBPixel, FBPixelBody } from './fb-pixel'

export const Analytics = ({ children }) => (
  <>
    <Head>
      <GTM code={process.env.GTM_TAG} />
      <FBPixel codes={process.env.FB_PIXEL_IDS.split(',')} />
    </Head>
    <GTMBody code={process.env.GTM_TAG} />
    <FBPixelBody codes={process.env.FB_PIXEL_IDS.split(',')} />
  </>
)
