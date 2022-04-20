import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Pages/Home';
import Products from './components/Pages/Products';
import Services from './components/Pages/Services';
import SignUp from './components/Pages/SignUp';

function App() {
  return (
    <>
    <Router>
     <Navbar />
     <Routes>
       <Route path='/' exact element={<Home />} />
       <Route path='/products' exact element={<Products />} />
       <Route path='/services' exact element={<Services />} />
       <Route path='/signup' exact element={<SignUp />} />
     </Routes>

     </Router>
    </>
  );
}

export default App;
