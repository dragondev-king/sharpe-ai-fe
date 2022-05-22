import { useRef } from "react";
import { Box } from "@material-ui/core";
import { VictoryLine, VictoryChart, VictoryTheme } from "victory";

import { useClientSize } from "../../../../hooks/victory";
import './style.scss'
const data=[
  { x: 'JAN', y: 20 },
  { x: 'FEB', y: 25 },
  { x: 'MAR', y: 22 },
  { x: 'APR', y: 30 },
  { x: 'MAY', y: 35 },
  { x: 'JUN', y: 38 },
  { x: 'JUL', y: 42 },
  { x: 'AUG', y: 45 },
  { x: 'SEP', y: 51 },
  { x: 'OCT', y: 53 },
  { x: 'NOV', y: 60 },
  { x: 'DEC', y: 62 },
]

const TotalViewChart = ({title}) => {
  const ref = useRef()
  const size = useClientSize(ref, undefined, 400)
  return (
    <div className="chart-wrapper">
      <Box itemRef={ref}>
        <div className="title-wrapper">
          <p>{title}</p>
          <div className="date-wrapper">
            <span>1M</span>
            <span>1Y</span>
          </div>
        </div>
        <VictoryChart {...size} >
          <VictoryLine
            style={{
              data: { stroke: '#00FF57'},
              labels: {color: 'white'},
              parent: { border: "1px solid #FFF" },
            }}
            data={data}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 }
            }}
          />
        </VictoryChart>
      </Box>
    </div>
  );
};

export default TotalViewChart;
