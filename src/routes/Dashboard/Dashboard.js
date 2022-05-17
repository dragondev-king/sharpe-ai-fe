import { Grid } from "@material-ui/core"

import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import Card from "../../components/Card"
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
                <Card />
                <Card />
              </div>
              <div className="card-wrapper">
                <Card />
                <Card />
              </div>
              <div className="card-wrapper">
                <Card />
                <Card />
              </div>
              <div>
                Chart viewer
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className="dashboard dashboard-right">
              Statistics
              <div className="card-wrapper">
                <Card />
                <Card />
              </div>

            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Dashboard
