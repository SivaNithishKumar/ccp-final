import './App.css';
import Register from './pages/Register';
import './style.css';
import Home from './pages/Home';
import Main from './pages/Main';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
    <Router basename="/">
      <Routes basename="/">
        <Route path="/" element={<Home/>} />
        <Route path="/main" element={<Main/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
