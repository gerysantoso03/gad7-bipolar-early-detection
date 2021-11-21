import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gad7Provider from './context/Gad7Context';
import Gad7 from './pages/Gad7';
import Home from './pages/Home';

function App() {
  return (
    <Gad7Provider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gad7" element={<Gad7 />} />
        </Routes>
      </Router>
    </Gad7Provider>
  );
}

export default App;
