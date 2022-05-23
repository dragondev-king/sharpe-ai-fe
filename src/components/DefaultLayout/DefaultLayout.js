import { useState, useCallback } from "react"

import Header from '../Header'
import Navbar from "../Navbar"
import './style.scss'


const DefaultLayout = ({component}) => {
  const [subIsOpened, setSubIsOpened] = useState(false)

  const handleSubClick = useCallback(() => {
    setSubIsOpened(!subIsOpened)
  }, [subIsOpened, setSubIsOpened])

  return (
    <>
      <Header />
      <div className="dashboardnavbar-wrapper">
        <Navbar subIsOpened={subIsOpened} onSubClick={handleSubClick}/>
        {component}
      </div>
    </>
  )
}

export default DefaultLayout
