import { Routes, Route } from "react-router-dom";

import Taurus from "./Routes/Taurus";
import Phantom from './Routes/Phantom';

const Stratigies = () => {
  return (
    <Routes>
      <Route path="/taurus" element={<Taurus />} />
      <Route path="/phantom" element={<Phantom />} />
      <Route path="*" element={<Taurus />} />
    </Routes>
  );
};

export default Stratigies;
