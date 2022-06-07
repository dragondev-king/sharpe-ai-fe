import { useState, useMemo } from 'react';
import { DAppProvider, Mainnet, Polygon } from '@usedapp/core';

import Main from './routes';
import { NavbarContext } from './context/NavbarContext';
import './App.scss';


const config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Polygon.chainId]:'https://matic-mumbai.chainstacklabs.com',
  },
}


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
    <DAppProvider config={config}>
      <NavbarContext.Provider value={value}>
        <div className='main'>
          <Main />
        </div>
      </NavbarContext.Provider>
    </DAppProvider>
  );
}

export default App;
