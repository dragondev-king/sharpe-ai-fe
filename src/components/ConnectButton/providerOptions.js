import WalletConnectProvider from '@walletconnect/web3-provider'
import CoinbaseWalletSDK from '@coinbase/wallet-sdk'

export const providerOptions = {
    walletconnect: {
      display: {
        name: "WalletConnect",
        description: "For mobile app wallets",
      },
      package: WalletConnectProvider,
      options: {
        infuraId: '9aa3d95b3bc440fa88ea12eaa4456161',
      },
    },
    coinbasewallet: {
        package: CoinbaseWalletSDK, // Required
        options: {
          appName: "Sharpe AI", // Required
          infuraId:'9aa3d95b3bc440fa88ea12eaa4456161', // Required
          rpc: "", // Optional if `infuraId` is provided; otherwise it's required
          chainId: 1, // Optional. It defaults to 1 if not provided
          darkMode: false // Optional. Use dark theme, defaults to false
        }
      }
  };