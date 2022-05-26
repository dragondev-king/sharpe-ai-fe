import Header from '../Header'
import Navbar from "../Navbar"
import './style.scss'


const DefaultLayout = ({component}) => {
  return (
    <div className='main-container'>
      <Navbar/>
      <div className="dashboardnavbar-wrapper">
        <Header />
        {component}
      </div>
    </div>
  )
}

export default DefaultLayout
