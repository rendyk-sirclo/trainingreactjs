import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Category from './pages/Category';
import Detail from './pages/Detail';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/:categoryName" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
