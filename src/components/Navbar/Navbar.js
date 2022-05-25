import { useContext, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { MenuItem, MenuList } from '@material-ui/core'

import { NavbarContext } from '../../context/NavbarContext'
import SocialIcons from '../SocialIcons'
import './style.scss'
import { ReactComponent as CategoryIcon } from '../../assets/svgs/category.svg'
import { ReactComponent as FolderIcon } from '../../assets/svgs/folder.svg'
import {ReactComponent as ChatIcon } from '../../assets/svgs/chat.svg'
import { ReactComponent as HomeIcon } from '../../assets/svgs/home.svg'

const Navbar = () => {
  const {subIsOpened, setSubIsOpened, setHeaderText} = useContext(NavbarContext)
  
  const handleNavClick = useCallback((e) => {
    setSubIsOpened(false)
    setHeaderText(e.target.innerText)
  }, [setSubIsOpened, setHeaderText])
  
  const handleSubClick = useCallback(() => {
    setSubIsOpened(!subIsOpened)
  }, [subIsOpened, setSubIsOpened])

  const handleSubItemClick = useCallback((e) => {
    setHeaderText(e.target.innerText)
  }, [setHeaderText])

  return (
    <div className="navbar">
      <MenuList>
        <MenuItem onClick={handleNavClick} component={Link} to='/dashboard' key={'kkk'} ><HomeIcon className='menuicon'/><span>Dashboard</span></MenuItem>
        <MenuItem onClick={handleSubClick} component={Link} to='/stratigies'>
          <CategoryIcon className='menuicon' />
          <span>Stratigies</span>
          <svg className="MuiSvgIcon-root MuiSelect-icon MuiSelect-iconOutlined">
              <path d="M7 10l5 5 5-5z" />
          </svg>
        </MenuItem>
          <div className='sub-group' style={{display: subIsOpened ? 'block' : 'none'}}>
            <MenuList>
              <MenuItem onClick={handleSubItemClick} component={Link} to='/stratigies/taurus'>Taurus</MenuItem>
              <MenuItem onClick={handleSubItemClick} component={Link} to='/stratigies/phantom'>Phantom</MenuItem>
              <MenuItem onClick={handleSubItemClick} component={Link} to='/stratigies/helios'>Helios</MenuItem>
              <MenuItem onClick={handleSubItemClick} component={Link} to='/stratigies/vela'>Vela</MenuItem>
              <MenuItem onClick={handleSubItemClick} component={Link} to='/stratigies/centauri'>Centauri</MenuItem>
            </MenuList>
          </div>
        <MenuItem onClick={handleNavClick} component={Link} to='/indices'><FolderIcon className='menuicon' /><span>Indices</span></MenuItem>
        <MenuItem onClick={handleNavClick} component={Link} to='/feedback'><ChatIcon className='menuicon' /><span>Issue/Feedback</span></MenuItem>
      </MenuList>
      <SocialIcons />
    </div>
  )
}

export default Navbar
