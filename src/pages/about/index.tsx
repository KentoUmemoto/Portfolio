import ABOUT from '@/data/about/about.mdx'
import { Header } from '@/components/Header'

export default function About() {
  return (
    <>
      <Header />
      <div className='container mx-auto sm:px-24 sm:py-16 px-8 py-8 w-full min-h-screen'>
        <div className='prose'>
          <ABOUT />
        </div>
      </div>
    </>
  )
}
