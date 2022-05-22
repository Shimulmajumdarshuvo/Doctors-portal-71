
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appointment/Appointment';
import About from './Pages/Home/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Home/Login/Login';
import RequireAuth from './Pages/Home/Login/RequireAuth';
import SignUp from './Pages/Home/Login/SignUp';
import Navbar from './Pages/Home/Shared/Navbar';


import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;
