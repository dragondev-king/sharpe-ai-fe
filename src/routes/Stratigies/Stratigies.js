import { Routes, Route } from "react-router-dom";

import Taurus from "./routes/Taurus";
import Phantom from './routes/Phantom';

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
