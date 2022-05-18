import { useState, useCallback } from 'react'
import { MenuItem, Select, SvgIcon } from '@material-ui/core'
import './style.scss'
import EthereumLogo from '../../assets/ethereum-logo.svg'
import FantomLogo from '../../assets/fantom-logo.svg'
import PolygonLogo from '../../assets/polygon-logo.svg'
import BNBLogo from '../../assets/bsc-logo.svg'
import AvancheLogo from '../../assets/avalanche-logo.svg'

const ChainSelector = () => {
  const [chain, setChain] = useState('ethereum')

  const handleChainChange = useCallback((e) =>{
    setChain(e.target.value)
  }, [setChain])
  return (
    <div className='select-wrapper'>
      <Select value={chain} onChange={handleChainChange} className='select' variant='outlined'>
        <MenuItem value='ethereum'><img src={EthereumLogo} alt=''/><span>Ethereum</span></MenuItem>
        <MenuItem value='fantom'><img src={FantomLogo} alt=''/><span>Fantom</span></MenuItem>
        <MenuItem value='polygon'><img src={PolygonLogo} alt=''/><span>Polygon</span></MenuItem>
        <MenuItem value='bnb'><img src={BNBLogo} alt=''/><span>BNB Chain</span></MenuItem>
        <MenuItem value='avalanche'><img src={AvancheLogo} alt=''/><span>Avalanche</span></MenuItem>
      </Select>
    </div>
  )
}

export default ChainSelector
