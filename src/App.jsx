// import logo from './logo.svg';

import { Typography } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Company from './screens/compant';
import Ir from './screens/IR';
import Mobility from './screens/Mob';
import Newsroom from './screens/News';
import Sustainblity from './screens/sustainble';

// import StoreApp from './components/Store App';

function App() {
  return(
  <>
   {/* <Typography variant='h2' component="a" sx={{display:{xs:"flex", md:"none"}}}>
    Hello World
   </Typography> */}


   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/company" element={<Company />} />  
   <Route path="/news" element={<Newsroom />} />  
   <Route path="/mobility" element={<Mobility />} /> 
   <Route path="/sustain" element={<Sustainblity />} />  
   <Route path="/ir" element={<Ir />} />  
   </Routes>
  </>
  )
}

export default App;
