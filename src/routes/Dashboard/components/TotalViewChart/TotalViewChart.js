import { VictoryChart, VictoryLine, VictoryTheme } from "victory";
import './style.scss'

const TotalViewChart = () => {
  return (
    <div className="chart-wrapper">
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryLine
          style={{
            data: { stroke: "#00FF57" },
            parent: { border: "1px solid #eee" },
          }}
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 },
          ]}
        />
      </VictoryChart>
    </div>
  );
};

export default TotalViewChart;
