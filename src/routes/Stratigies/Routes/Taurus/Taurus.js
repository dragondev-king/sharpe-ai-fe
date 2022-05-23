import { Grid } from "@material-ui/core"

import './style.scss'
import DefaultLayout from "../../../../components/DefaultLayout"
import TaurusCard from "./components/TaurusCard"
import UsdcLogo  from '../../../../assets/svgs/chains/usdc-logo.svg'
import DaiLogo from '../../../../assets/svgs/chains/dai-logo.svg'
import FraxLogo from '../../../../assets/svgs/chains/frax-logo.svg'
import PolygonMaticLogo from '../../../../assets/svgs/chains/polygon-matic-logo.svg'


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
          <TaurusCard name={'miMATIC'} logoLeft={UsdcLogo} logoRight={PolygonMaticLogo}/>
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
