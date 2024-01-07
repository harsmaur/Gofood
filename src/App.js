
import './App.css';
import Home from './Screens/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div>

    <Routes>

      <Route exact path='/' element={<Home/>}></Route>

       <Route exact path="/about" element={<Navbar />}></Route>	

    </Routes>


    </div>
  </BrowserRouter>
  );
}

export default App;
