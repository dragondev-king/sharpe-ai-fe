import Header from '../Header'
import Navbar from "../Navbar"
import './style.scss'


const DefaultLayout = ({component}) => {
  return (
    <>
      <Header />
      <div className="dashboardnavbar-wrapper">
        <Navbar/>
        {component}
      </div>
    </>
  )
}

export default DefaultLayout
