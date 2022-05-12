
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Home/Login/Login';
import Navbar from './Pages/Home/Shared/Navbar';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
