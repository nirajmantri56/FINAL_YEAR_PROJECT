import './App.css';
import Projectpage from "./pages/Projectpage";
import Home from './pages/Home';

import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import Signinpage from './pages/Signinpage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<SignupPage />} />
        <Route path='/login' element={<Signinpage />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/projectpage' element={<Projectpage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
