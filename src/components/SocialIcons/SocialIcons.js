import { ReactComponent as TwitterIcon } from '../../assets/svgs/twitter.svg'
import { ReactComponent as DiscordIcon } from '../../assets/svgs/discord.svg'
import { ReactComponent as EmailIcon } from '../../assets/svgs/email.svg'
import { ReactComponent as BookIcon } from '../../assets/svgs/book.svg'
import './style.scss'

const SocialIcons = () => {
  return (
    <div className='social-icons'>
      <a href='https://twitter.com'>
        <TwitterIcon />
      </a>
      <a href='https://discord.com'>
        <DiscordIcon />
      </a>
      <a href='https://email.com'>
        <EmailIcon />
      </a>
      <a href='https://book.com'>
        <BookIcon />
      </a>
    </div>
  )
}

export default SocialIcons
