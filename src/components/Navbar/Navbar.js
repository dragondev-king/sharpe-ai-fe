import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuItem, MenuList } from '@material-ui/core'

import SocialIcons from '../SocialIcons'
import './style.scss'
import { ReactComponent as CategoryIcon } from '../../assets/svgs/category.svg'
import { ReactComponent as FolderIcon } from '../../assets/svgs/folder.svg'
import {ReactComponent as ChatIcon } from '../../assets/svgs/chat.svg'
import { ReactComponent as HomeIcon } from '../../assets/svgs/home.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toogleCategory = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen, setIsOpen])

  return (
    <div className="navbar">
      <MenuList>
        <MenuItem component={Link} to='/dashboard'><HomeIcon className='menuicon'/><span>Dashboard</span></MenuItem>
        <MenuItem onClick={toogleCategory}>
          <CategoryIcon className='menuicon' />
          <span>Stratigies</span>
          <svg className="MuiSvgIcon-root MuiSelect-icon MuiSelect-iconOutlined">
              <path d="M7 10l5 5 5-5z" />
          </svg>
        </MenuItem>
          <div className='sub-group' style={{display: isOpen ? 'block' : 'none'}}>
            <MenuList>
              <MenuItem component={Link} to='/stratiges/phantom'>Phantom</MenuItem>
              <MenuItem component={Link} to='/stratiges/helios'>Helios</MenuItem>
              <MenuItem component={Link} to='/stratiges/vela'>Vela</MenuItem>
              <MenuItem component={Link} to='/stratiges/centauri'>Centauri</MenuItem>
              <MenuItem component={Link} to='/stratiges/torous'>Torous</MenuItem>
            </MenuList>
          </div>
        <MenuItem component={Link} to='/indices'><FolderIcon className='menuicon' /><span>Indices</span></MenuItem>
        <MenuItem component={Link} to='/feedback'><ChatIcon className='menuicon' /><span>Issue/Feedback</span></MenuItem>
      </MenuList>
      <SocialIcons />
    </div>
  )
}

export default Navbar
