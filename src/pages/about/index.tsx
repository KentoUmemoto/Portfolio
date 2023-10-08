import ABOUT from '@/data/about/about.mdx'
import { Header } from '@/components/Header'
import { Helmet } from 'react-helmet-async'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Header />
      <div className='container mx-auto sm:px-24 sm:py-16 px-8 py-8 w-full min-h-screen'>
        <div className='prose prose-headings:mt-2 prose-headings:mb-4'>
          <ABOUT />
        </div>
      </div>
    </>
  )
}
