import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'

export function Navbar () {
  const { count } = useContext(ShoppingCartContext)

  const activeStyle = 'underline underline-offset-4'

  const getNavLinkClass = ({ isActive }) => isActive ? activeStyle : undefined

  const navLinks = [
    { to: '/', label: 'All' },
    { to: 'clothes', label: 'Clothes' },
    { to: 'electronics', label: 'Electronics' },
    { to: 'furnitures', label: 'Furnitures' },
    { to: 'toys', label: 'Toys' },
    { to: 'others', label: 'Others' }
  ]

  const userLinks = [
    { to: '/my-orders', label: 'My Orders' },
    { to: '/my-account', label: 'My Account' },
    { to: '/sign-in', label: 'Sign In' }
  ]

  return (
    <nav className='flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li className='text-lg font-semibold'>
          <NavLink to='/'>
            Shopi
          </NavLink>
        </li>
        {navLinks.map(link => (
          <li key={link.to}>
            <NavLink to={link.to} className={getNavLinkClass}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>
          test@platzi.com
        </li>
        {userLinks.map(link => (
          <li key={link.to}>
            <NavLink to={link.to} className={getNavLinkClass}>
              {link.label}
            </NavLink>
          </li>
        ))}
        <li>
          🛒 {count}
        </li>
      </ul>
    </nav>
  )
}
