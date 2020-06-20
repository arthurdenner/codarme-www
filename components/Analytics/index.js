import Head from 'next/head'

import { GTMHead, GTMBody } from './gtm'
import { FBPixel } from './fb-pixel'

const HeadTags = () => (
  <>
    <GTMHead code={process.env.GTM_TAG} />
    <FBPixel codes={process.env.FB_PIXEL_IDS.split(',')} />
  </>
)

export const Analytics = () => (
  <>
    <Head>
      <HeadTags />
    </Head>
    <GTMBody code={process.env.GTM_TAG} />
  </>
)
