import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Registration } from './components/registration';
import Login from './components/login';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
