import { Grid } from "@material-ui/core"

import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import SimpleCard from "./components/SimpleCard"
import TotalViewChart from "./components/TotalViewChart"
import HistoryChart from './components/HistoryChart'
import './style.scss'

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="dashboardnavbar-wrapper">
        <Navbar />
        <Grid container>
          <Grid item xs={12} md={7}>
            <div className="dashboard dashboard-left">
              <div className="card-wrapper card-wrapper__first">
                <SimpleCard />
                <SimpleCard />
              </div>
              <div className="card-wrapper">
                <SimpleCard />
                <SimpleCard />
              </div>
              <div className="card-wrapper">
                <SimpleCard />
                <SimpleCard />
              </div>
              <div>
                <TotalViewChart />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className="dashboard dashboard-right">
              Statistics
              <div className="card-wrapper">
                <SimpleCard />
                <SimpleCard />
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
