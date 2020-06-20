import Head from 'next/head'

import { GTMHead, GTMBody } from './gtm'
import { FBPixel } from './fb-pixel'

const fbPixelIds = process.env.FB_PIXEL_IDS.split(',')
const gtmTag = process.env.GTM_TAG

export const Analytics = ({ children }) => (
  <>
    <Head>
      <GTMHead code={gtmTag} />
      <FBPixel codes={fbPixelIds} />
    </Head>
    <GTMBody code={gtmTag} />
  </>
)
