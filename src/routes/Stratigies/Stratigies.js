import { Routes, Route } from "react-router-dom";

import Taurus from "./routes/Taurus";

const Stratigies = () => {
  return (
    <Routes>
      <Route path="/taurus" element={<Taurus />} />
      <Route path="*" element={<Taurus />} />
    </Routes>
  );
};

export default Stratigies;
