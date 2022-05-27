import { Grid } from "@material-ui/core"

import './style.scss'
import DefaultLayout from "../../../../components/DefaultLayout"
import ComingSoonCard from "../../../../components/ComingSoonCard"
import TaurusCard from "./components/TaurusCard"
import { cardColors } from "../../../../utils/helpers"

import UsdcLogo  from '../../../../assets/svgs/chains/usdc-logo.svg'
import DaiLogo from '../../../../assets/svgs/chains/dai-logo.svg'
import FraxLogo from '../../../../assets/svgs/chains/frax-logo.svg'
// import PolygonMaticLogo from '../../../../assets/svgs/chains/polygon-matic-logo.svg'
import UniswapLogo from '../../../../assets/svgs/chains/uniswap-logo.svg'
import EthereumLogo from '../../../../assets/svgs/chains/ethereum-logo.svg'
import BitcoinLogo from '../../../../assets/svgs/chains/bitcoin-logo.svg'
import MaticLogo from '../../../../assets/svgs/mimatic-red.svg'

const TaurusContent = () => {
  return (
    <div className="taurus-container">
      <Grid container>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <TaurusCard name={'DAI'} logoLeft={UsdcLogo} logoRight={DaiLogo} />
        </Grid>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <TaurusCard name={'FRAX'} logoLeft={UsdcLogo} logoRight={FraxLogo}/>
        </Grid>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <TaurusCard name={'miMATIC'} logoLeft={UsdcLogo} logoRight={MaticLogo}/>
        </Grid>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <ComingSoonCard logo={UniswapLogo} color={cardColors.uniswap} />
        </Grid>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <ComingSoonCard logo={EthereumLogo} color={cardColors.ethereum} />
        </Grid>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <ComingSoonCard logo={BitcoinLogo} color={cardColors.bitcoin} />
        </Grid>
      </Grid>
    </div>
  )
}

const Taurus = () => {
  return (
    <>
      <DefaultLayout component={<TaurusContent />} /> 
    </>
  )
}

export default Taurus
