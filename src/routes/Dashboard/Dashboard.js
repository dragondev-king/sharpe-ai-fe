import { Grid } from "@material-ui/core"

import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import SimpleCard from "./components/SimpleCard"
import TotalViewChart from "./components/TotalViewChart"
import HistoryChart from './components/HistoryChart'
import './style.scss'
import { ReactComponent as DepositIcon } from '../../assets/svgs/deposit.svg'
import { ReactComponent as VaultEarningIcon } from '../../assets/svgs/vault-earning.svg'
import { ReactComponent as TotalNetWorthIcon } from '../../assets/svgs/total-net-worth.svg'
import { ReactComponent as TotalWorthIcon } from '../../assets/svgs/total-worth.svg'
import { ReactComponent as ProjectedAPYIcon } from '../../assets/svgs/projected-apy.svg'
import { ReactComponent as ActivePositionsIcon } from '../../assets/svgs/active-positions.svg'
import { ReactComponent as VaultsIcon } from '../../assets/svgs/vaults.svg'
import { ReactComponent as TotalValueLockedIcon } from '../../assets/svgs/total-value-locked.svg'


const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="dashboardnavbar-wrapper">
        <Navbar />
        <Grid container>
          <Grid item xs={12} md={12} lg={7}>
            <div className="dashboard dashboard-left">
              <div className="card-wrapper card-wrapper__first">
                <SimpleCard IconComponent={<DepositIcon />} type='middle' text='DEPOSITS' value={460} />
                <SimpleCard IconComponent={<VaultEarningIcon />} type='middle' text='VAULT EARNING' value={840} />
              </div>
              <div className="card-wrapper">
                <SimpleCard IconComponent={<TotalNetWorthIcon />} type='large' text='Total net worth' value={5250.90} />
                <SimpleCard IconComponent={<TotalWorthIcon />} type='large' text='Total Worth' value={10596.80} />
              </div>
              <div className="card-wrapper">
                <SimpleCard IconComponent={<ProjectedAPYIcon />} type='large' text='Projected APY' value={0} />
                <SimpleCard IconComponent={<ActivePositionsIcon />} type='large' text='Active Positions' value={5596.80} />
              </div>
              <div>
                <TotalViewChart />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={5}>
            <div className="dashboard dashboard-right">
              Statistics
              <div className="card-wrapper">
                <SimpleCard IconComponent={<VaultsIcon />} type='small' text='DEPOSITS' value={12} />
                <SimpleCard IconComponent={<TotalValueLockedIcon />} type='small' text='DEPOSITS' value={250000} />
              </div>
              <HistoryChart />
              <HistoryChart />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Dashboard
