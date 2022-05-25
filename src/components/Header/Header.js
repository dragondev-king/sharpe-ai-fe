import { Link } from 'react-router-dom'

import ChainSelector from '../ChainSelector'
import ConnectButton from '../ConnectButton'
import './style.scss'
import { ReactComponent as Logo } from '../../assets/svgs/logo.svg'

const Header = () => {
  return (
    <div className="header">
      <div className='header-left'>
        <Link to='/'>
          <Logo className='logo'/>
        </Link>
        <div className='dashboard-text'>Dashboard</div>
      </div>
      <div className='header-right'>
        <ChainSelector />
        <ConnectButton />
      </div>
    </div>
  )
}

export default Header
