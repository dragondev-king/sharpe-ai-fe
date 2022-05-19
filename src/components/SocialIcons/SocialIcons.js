import { Link } from 'react-router-dom'

import { ReactComponent as TwitterIcon } from '../../assets/svgs/twitter.svg'
import { ReactComponent as DiscordIcon } from '../../assets/svgs/discord.svg'
import { ReactComponent as EmailIcon } from '../../assets/svgs/email.svg'
import { ReactComponent as BookIcon } from '../../assets/svgs/book.svg'
import './style.scss'

const SocialIcons = () => {
  return (
    <div className='social-icons'>
      <Link to='https://twitter.com'>
        <TwitterIcon />
      </Link>
      <Link to='https://discord.com'>
        <DiscordIcon />
      </Link>
      <Link to='https://email.com'>
        <EmailIcon />
      </Link>
      <Link to='https://book.com'>
        <BookIcon />
      </Link>
    </div>
  )
}

export default SocialIcons
