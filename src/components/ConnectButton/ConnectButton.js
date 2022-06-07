import { useState, useCallback,  useEffect } from 'react'
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'

import { providerOptions } from './providerOptions'
import { showNotification } from '../../utils/helpers'
import './style.scss'


const web3Modal = new Web3Modal({
  providerOptions,
  cacheProvider: true,
})

const ConnectButton = () => {
  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const [account, setAccount] = useState();
  const [network, setNetwork] = useState();
  const [connected, setConnected] = useState(false)

  const connectWallet = useCallback(async () => {
    try {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      const network = await library.getNetwork();
      if(network.chainId !== 137) {
          showNotification({
          title: 'Warning',
          message: 'Unsupported Network: Please change wallet network to Polygon',
          type: 'warning',
          insert: 'top',
          container: 'top-right'
        })
        return
      }
      setProvider(provider);
      setLibrary(library);
      setConnected(true)
      if (accounts) setAccount(accounts[0]);
      setNetwork(network);
    } catch (error) {
      console.error(error);
    }
  }, [])

  const disconnect = useCallback( async () => {
    await web3Modal.clearCachedProvider();
    refreshState();
  }, [])

  const refreshState = () => {
    setAccount();
    setNetwork("");
    setConnected(false)
  };

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts) => {
        // setAccounts(accounts);
      };
  
      const handleChainChanged = (chainId) => {
        // setChainId(chainId);
      };
  
      const handleDisconnect = () => {
        disconnect();
      };
  
      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
      provider.on("disconnect", handleDisconnect);
  
      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
          provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, [provider, disconnect]);

  return (
    <div>
      {
        connected ? 
          <button onClick={disconnect} className='connect-button'>Disconnect Wallet</button> 
          :
          <button onClick={connectWallet} className='connect-button'>Connect Wallet</button>
      }
      {console.log('account:', account, 'network:', network)}
    </div>
  )
}

export default ConnectButton
