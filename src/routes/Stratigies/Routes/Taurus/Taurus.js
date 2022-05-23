import { Grid } from "@material-ui/core"

import DefaultLayout from "../../../../components/DefaultLayout"
import TaurusCard from "./components/TaurusCard"
import './style.scss'

import { ReactComponent as USDCLogo} from '../../../../assets/svgs/chains/usdc-logo.svg'
import { ReactComponent as DAILogo} from '../../../../assets/svgs/chains/dai-logo.svg'

const TaurusContent = () => {
  return (
    <>
      <Grid item lg={4} md={6} sm={12}>
        <TaurusCard name={'DAI'} logoLeft={<USDCLogo />} logoRight={<DAILogo />} />
      </Grid>
      <Grid item lg={4} md={6} sm={12}>
        <TaurusCard name={'FRAX'}/>
      </Grid>
      <Grid item lg={4} md={6} sm={12}>
        <TaurusCard name={'miMATIC'}/>
      </Grid>
    </>
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
