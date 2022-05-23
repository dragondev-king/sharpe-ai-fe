import { Link } from 'react-router-dom'
import { MenuItem, MenuList } from '@material-ui/core'

import SocialIcons from '../SocialIcons'
import './style.scss'
import { ReactComponent as CategoryIcon } from '../../assets/svgs/category.svg'
import { ReactComponent as FolderIcon } from '../../assets/svgs/folder.svg'
import {ReactComponent as ChatIcon } from '../../assets/svgs/chat.svg'
import { ReactComponent as HomeIcon } from '../../assets/svgs/home.svg'

const Navbar = ({subIsOpened, onSubClick}) => {

  return (
    <div className="navbar">
      <MenuList>
        <MenuItem component={Link} to='/dashboard'><HomeIcon className='menuicon'/><span>Dashboard</span></MenuItem>
        <MenuItem onClick={onSubClick} component={Link} to='/stratigies'>
          <CategoryIcon className='menuicon' />
          <span>Stratigies</span>
          <svg className="MuiSvgIcon-root MuiSelect-icon MuiSelect-iconOutlined">
              <path d="M7 10l5 5 5-5z" />
          </svg>
        </MenuItem>
          <div className='sub-group' style={{display: subIsOpened ? 'block' : 'none'}}>
            <MenuList>
              <MenuItem component={Link} to='/stratigies/tarous'>Tarous</MenuItem>
              <MenuItem component={Link} to='/stratigies/phantom'>Phantom</MenuItem>
              <MenuItem component={Link} to='/stratigies/helios'>Helios</MenuItem>
              <MenuItem component={Link} to='/stratigies/vela'>Vela</MenuItem>
              <MenuItem component={Link} to='/stratigies/centauri'>Centauri</MenuItem>
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
