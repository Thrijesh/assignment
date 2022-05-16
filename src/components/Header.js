import React from 'react'
import Search from './search'

import './style.scss'

function Header({ setQuery }) {
  return (
    <div className='Header'>
        <button className='btn-login'>LOGIN</button>
        <Search setQuery={setQuery}/>
    </div>
  )
}

export default Header