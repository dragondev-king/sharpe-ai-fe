import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg'
import { ReactComponent as DiscordIcon } from '../../assets/discord.svg'
import { ReactComponent as EmailIcon } from '../../assets/email.svg'
import { ReactComponent as BookIcon } from '../../assets/book.svg'
import './style.scss'

const SocialIcons = () => {
  return (
    <div className='social-icons'>
      <TwitterIcon />
      <DiscordIcon />
      <EmailIcon />
      <BookIcon />
    </div>
  )
}

export default SocialIcons
