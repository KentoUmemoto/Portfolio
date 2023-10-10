import { Link } from '@/router'
import { TerminalController } from '@/components/TerminalController'
import { Helmet } from 'react-helmet-async'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Portfolio - KentoUmemoto</title>
      </Helmet>
      <div className='container mx-auto sm:px-24 sm:py-16 px-8 py-8 w-full min-h-screen grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-4 content-start'>
        <div className='lg:col-span-2'>
          <h1 className='text-5xl font-bold'>Kento Umemoto</h1>
          <h2 className='mt-4 text-xl font-light animate-fade-in-left'>
            Web Developer, Engineer
          </h2>
        </div>
        <div className='lg:row-span-3'>
          <div className='animate-fade-in-left'>
            <Link to={'/about'} className='text-2xl group/about'>
              About me
              <span className='i-lucide-arrow-right w-5 h-5 align-middle ml-2'></span>
              <span className='block max-w-0 group-hover/about:max-w-xs transition-all duration-500 h-0.5 bg-gray-400'></span>
            </Link>
          </div>
          <div className='lg:mt-4 animate-fade-in-left'>
            <Link to={'/works'} className='text-2xl group/about'>
              Works
              <span className='i-lucide-arrow-right w-5 h-5 align-middle ml-2'></span>
              <span className='block max-w-0 group-hover/about:max-w-xs transition-all duration-500 h-0.5 bg-gray-400'></span>
            </Link>
          </div>
          <div className='lg:mt-4 animate-fade-in-left'>
            <a
              href='https://github.com/KentoUmemoto'
              target='_blank'
              className='text-2xl group/github'
            >
              Github
              <span className={'i-logos-github-icon ml-1 w-5 h-5 align-middle'}></span>
              <span className='block max-w-0 group-hover/github:max-w-xs transition-all duration-500 h-0.5 bg-gray-400'></span>
            </a>
          </div>
        </div>
        <div className='lg:row-span-3 mt-4'>
          <TerminalController />
        </div>
      </div>
    </>
  )
}
