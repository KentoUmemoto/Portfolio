import { Link } from '@/router'

export function Footer() {
  return (
    <footer className='footer footer-center p-10 bg-base-200 text-base-content rounded mt-auto'>
      <nav className='grid grid-flow-col gap-4'>
        <Link to={'/'} className='link link-hover'>
          Home
        </Link>
        <Link to={'/about'} className='link link-hover'>
          About
        </Link>
        <Link to={'/works'} className='link link-hover'>
          Works
        </Link>
        <a
          href='https://github.com/KentoUmemoto'
          target='_blank'
          className='link link-hover'
        >
          Github
          <span className={'i-logos-github-icon ml-1 w-5 h-5 align-middle'}></span>
        </a>
      </nav>
    </footer>
  )
}
