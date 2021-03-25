import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Webdev News</title>
        <meta name='keywords' content='web dev, programming' />
      </Head>
       <h1>Welcome to Next</h1> 
    </div>
  )
}

export const getStaticProps = async() => {
  
}