import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './Dashboard'
import Taurus from './Taurus'
import Phantom from './Phantom'

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/taurus' element={<Taurus />} />
        <Route path='/phantom' element={<Phantom />} />
        <Route path='*' element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Main
