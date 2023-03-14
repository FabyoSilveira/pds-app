import Head from 'next/head'
import { NextPage } from 'next'

export const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PDS App</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <h1>Hello PDS App!</h1>
    </>
  )
}

export default Home
