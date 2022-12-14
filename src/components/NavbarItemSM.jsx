import React from 'react'
import { Link } from 'react-scroll'

const NavbarItemSM = (props) => {
  return (
    <li className='py-6 text-4xl'>
      <Link onClick={props.onClick} to={`${props.to}`} smooth duration={500} offset={-90}>
        {props.name}
      </Link>
    </li>
  )
}

export default NavbarItemSM
