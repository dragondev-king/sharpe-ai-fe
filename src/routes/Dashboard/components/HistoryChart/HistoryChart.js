import { useRef } from "react";
import { Box } from "@material-ui/core";
import { VictoryLine } from "victory";

import { useClientSize } from "../../../../hooks/victory";
import "./style.scss";

const data=[
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 2 },
  { x: 4, y: 2.3},
  { x: 5, y: 4 },
  { x: 6, y: 7 },
  { x: 7, y: 5 },
  { x: 8, y: 4 },
  { x: 9, y: 7 },
]

const HistoryChart = ({value, text, graphColor}) => {
  const ref = useRef()
  const size = useClientSize(ref)
  return (
    <div className="history-chart">
      <Box itemRef={ref}>
        <VictoryLine
          {...size}
          style={{
            data: { stroke: graphColor },
            parent: { border: "1px solid #eee" },
          }}
          data={data}
        />
        <div className="data-wrapper">
          <p>{`$${value}`}</p>
          <h4>{text}</h4>
        </div>
      </Box>
    </div>
  );
};

export default HistoryChart;
