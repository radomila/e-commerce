import Home from '../pages/Home/index.js';
import Women from '../pages/Women.js';
import Men from '../pages/Men.js';
import Accessories from '../pages/Accessories.js';
import { Routes, Route } from 'react-router-dom';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/women" element={<Women />} />
      <Route path="/men" element={<Men />} />
      <Route path="/accessories" element={<Accessories />} />
    </Routes>
  );
}

export default Routing;
