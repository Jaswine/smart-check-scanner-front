import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import useAuth from './hooks/useAuth'
import Registration from './components/Registration';
import Login from './components/Login';

function App() {
  const {isAuth} =useAuth()

  return (
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        {isAuth && (<Route path="/" element={<Home />} />)}
      </Routes>
  );
}

export default App;
