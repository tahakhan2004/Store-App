import logo from './logo.svg';
import './App.css';
import Navbarr from './components/Navbar';
import { Provider, useDispatch } from 'react-redux';
import { Addcounteraction, Minuscounteraction } from './Store/Action';
import store from './Store';
// import StoreApp from './components/Store App';
import { Route, Routes } from 'react-router-dom';
import LogIn from './screens/Login';
import SignUp from './screens/SignUp';
import ProtectedRoute from "./protectedRoutes"
import StoreApp from './screens/Home';
import About from './screens/About';
import AddCart from './screens/AddToCart';
import Card from './components/cards/Cards';
import Cardss from './components/cards/Cards';

function App() {
  return(
  <>
  {/* <StoreApp /> */}

    <Routes>
      <Route path="/" element={<LogIn />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>

      <Route element={<ProtectedRoute />}>
      <Route path="/storeapp" element={<StoreApp />}></Route>
      </Route>

      <Route path='/about' element={<About />}></Route>
      <Route path='/cart' element={<AddCart />}></Route>
      {/* <Route path='/card' element={<Cardss/>}></Route> */}



    </Routes>

  </>
  )
}

export default App;
