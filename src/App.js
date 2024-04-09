
import './App.css';
import Home from './Screens/Home';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Screens/Login';
import SignUp from './components/SignUp';
import { CartProvider } from './components/ContextReducer';


function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <div>
    <Routes>



      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/login' element={<Login/>}></Route>
      <Route exact path='/signup' element={<SignUp/>}></Route>



    </Routes>
    </div>
  </BrowserRouter>
  </CartProvider>
  );
}

export default App;
