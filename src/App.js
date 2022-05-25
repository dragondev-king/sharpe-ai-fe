import { useState, useMemo } from 'react';

import Main from './routes';
import { NavbarContext } from './context/NavbarContext';
import './App.scss';


function App() {
  const [subIsOpened, setSubIsOpened] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState(1)
  const [headerText, setHeaderText] = useState('Dashboard')
  const value = useMemo(() => ({
    subIsOpened,
    setSubIsOpened,
    selectedNumber,
    setSelectedNumber,
    headerText,
    setHeaderText
  }), [subIsOpened, selectedNumber, headerText])


  return (
    <NavbarContext.Provider value={value}>
      <div className='main'>
        <Main />
      </div>
    </NavbarContext.Provider>
  );
}

export default App;
