import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { NavbarContext } from '../../context/NavbarContext'
import ChainSelector from '../ChainSelector'
import ConnectButton from '../ConnectButton'
import './style.scss'
import { menus } from '../../utils/helpers'
import { ReactComponent as Logo } from '../../assets/svgs/logo.svg'

const Header = () => {
  const { headerText, setHeaderText } = useContext(NavbarContext)

  return (
    <div className="header">
      <div className='header-left'>
        <Link to='/' onClick={() => setHeaderText(menus.dashboard)}>
          <Logo className='logo'/>
        </Link>
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
