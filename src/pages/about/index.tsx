import ABOUT from '@/data/about/about.mdx'
import { Footer } from '@/components/Footer'
import { Helmet } from 'react-helmet-async'

export default function About() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Helmet>
        <title>About - KentoUmemoto</title>
      </Helmet>
      <div className='container mx-auto sm:px-24 sm:py-16 px-8 py-8 w-full flex-1'>
        <div className='prose prose-headings:mt-2 prose-headings:mb-4 max-w-full'>
          <ABOUT />
        </div>
      </div>
      <Footer />
    </div>
  )
}
