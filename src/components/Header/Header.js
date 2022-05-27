import { useContext } from 'react'

import { NavbarContext } from '../../context/NavbarContext'
import ChainSelector from '../ChainSelector'
import ConnectButton from '../ConnectButton'
import './style.scss'

const Header = () => {
  const { headerText } = useContext(NavbarContext)

  return (
    <div className="header">
      <div className='header-left'>
        <div className='dashboard-text'>{headerText}</div>
      </div>
      <div className='header-right'>
        <ChainSelector />
        <ConnectButton />
      </div>
    </div>
  )
}

export default Header
