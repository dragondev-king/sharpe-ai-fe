import { Grid } from "@material-ui/core";

import SimpleCard from "./components/SimpleCard";
import TotalViewChart from "./components/TotalViewChart";
import HistoryChart from "./components/HistoryChart";
import DefaultLayout from "../../components/DefaultLayout";
import "./style.scss";
import { ReactComponent as DepositIcon } from "../../assets/svgs/deposit.svg";
import { ReactComponent as VaultEarningIcon } from "../../assets/svgs/vault-earning.svg";
import { ReactComponent as TotalNetWorthIcon } from "../../assets/svgs/total-net-worth.svg";
import { ReactComponent as TotalWorthIcon } from "../../assets/svgs/total-worth.svg";
import { ReactComponent as ProjectedAPYIcon } from "../../assets/svgs/projected-apy.svg";
import { ReactComponent as ActivePositionsIcon } from "../../assets/svgs/active-positions.svg";
import { ReactComponent as VaultsIcon } from "../../assets/svgs/vaults.svg";
import { ReactComponent as TotalValueLockedIcon } from "../../assets/svgs/total-value-locked.svg";

const DashboardContent = () => {
  return (
    <Grid container>
      <Grid item sm={12} md={6} lg={6}>
        <div className="dashboard dashboard-left">
          <div className="card-wrapper card-wrapper__first">
            <SimpleCard
              IconComponent={<DepositIcon />}
              type="middle"
              text="DEPOSITS"
              value={460}
            />
            <SimpleCard
              IconComponent={<VaultEarningIcon />}
              type="middle"
              text="VAULT EARNING"
              value={840}
            />
          </div>
          <div className="card-wrapper">
            <SimpleCard
              IconComponent={<TotalNetWorthIcon />}
              type="large"
              text="Total net worth"
              value={5250.9}
            />
            <SimpleCard
              IconComponent={<TotalWorthIcon />}
              type="large"
              text="Total Worth"
              value={10596.8}
            />
          </div>
          <div className="card-wrapper">
            <SimpleCard
              IconComponent={<ProjectedAPYIcon />}
              type="large"
              text="Projected APY"
              value={0}
            />
            <SimpleCard
              IconComponent={<ActivePositionsIcon />}
              type="large"
              text="Active Positions"
              value={5596.8}
            />
          </div>
          <div>
            <TotalViewChart title={"Total Value Locked"} />
          </div>
        </div>
      </Grid>
      <Grid item sm={12} md={6} lg={6}>
        <div className="dashboard dashboard-right">
          <p className="text-wrapper">Statistics</p>
          <div className="card-wrapper">
            <SimpleCard
              IconComponent={<VaultsIcon />}
              type="small"
              text="VAULTS"
              value={12}
            />
            <SimpleCard
              IconComponent={<TotalValueLockedIcon />}
              type="small"
              text="TOTAL VALUE LOCKED"
              value={250000}
            />
          </div>
          <div className="history-chart-wrapper">
            <HistoryChart
              value={6250}
              text="Income Generated"
              graphColor="#F9896B"
            />
            <HistoryChart value={40250} text="Volume" graphColor="#FC75FF" />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

const Dashboard = () => {
  return <DefaultLayout component={<DashboardContent />} />;
};

export default Dashboard;
