import Home from '../pages/Home/index.js';
import Clothing from '../pages/Clothing.js';
import { Routes, Route } from 'react-router-dom';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clothing" element={<Clothing />} />
    </Routes>
  );
}

export default Routing;
