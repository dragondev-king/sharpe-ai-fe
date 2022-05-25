// import { useState, useCallback } from "react"

import Header from '../Header'
import Navbar from "../Navbar"
import './style.scss'


const DefaultLayout = ({component}) => {
  // const [subIsOpened, setSubIsOpened] = useState(false)

  // const handleSubClick = useCallback(() => {
  //   setSubIsOpened(!subIsOpened)
  //   console.log(subIsOpened, 'clicked')
  // }, [subIsOpened, setSubIsOpened])

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
