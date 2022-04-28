
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import LogIn from './components/LogIN/LogIn';
import Orders from './components/Orders/Orders';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';
import Shipment from './components/Shipment/Shipment';
import Shop from './components/Shop/Shop';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
       <Routes>
           <Route path='/' element={<Shop></Shop>}></Route>
            <Route path='/shop' element={<Shop></Shop>}></Route>
            <Route path='/orders' element={<Orders></Orders>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/inventory' element={
              <RequiredAuth>
                    <Inventory></Inventory>
              </RequiredAuth>
            }></Route>
            <Route path='/shipment' element={
              <RequiredAuth>
                    <Shipment></Shipment>
              </RequiredAuth>
            }></Route>
            <Route path='/login' element={<LogIn></LogIn>}></Route>
            <Route path='/signup' element={<SignUp></SignUp>}></Route>
       </Routes>
    </div>
  );
}

export default App;
