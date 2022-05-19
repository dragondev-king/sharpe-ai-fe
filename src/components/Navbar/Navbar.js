import { useCallback, useState } from 'react'
import { MenuItem, MenuList } from '@material-ui/core'

import './style.scss'
import { ReactComponent as CategoryIcon } from '../../assets/category.svg'
import { ReactComponent as FolderIcon } from '../../assets/folder.svg'
import {ReactComponent as ChatIcon } from '../../assets/chat.svg'
import { ReactComponent as HomeIcon } from '../../assets/home.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toogleCategory = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen, setIsOpen])

  return (
    <div className="navbar">
      <MenuList>
        <MenuItem><HomeIcon className='menuicon'/><span>Dashboard</span></MenuItem>
        <MenuItem onClick={toogleCategory}>
          <CategoryIcon className='menuicon' />
          <span>Stratigies</span>
          <svg className="MuiSvgIcon-root MuiSelect-icon MuiSelect-iconOutlined">
              <path d="M7 10l5 5 5-5z" />
          </svg>
        </MenuItem>
          <div className='sub-group' style={{display: isOpen ? 'block' : 'none'}}>
            <p>Torous</p>
            <p>Phantom</p>
            <p>Helios</p>
            <p>Vela</p>
            <p>Centauri</p>
          </div>
        <MenuItem><FolderIcon className='menuicon' /><span>Indices</span></MenuItem>
        <MenuItem><ChatIcon className='menuicon' /><span>Issue/Feedback</span></MenuItem>
      </MenuList>
    </div>
  )
}

export default Navbar
