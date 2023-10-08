import { Link } from '@/router'

export const Header = () => {
  return (
    <div className='navbar bg-base '>
      <div className='navbar-start'></div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/works'>Works</Link>
          </li>
        </ul>
      </div>
      <div className='navbar-end'></div>
    </div>
  )
}
