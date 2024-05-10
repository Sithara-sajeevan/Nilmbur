import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Cources from './pages/Cources';
import About from './pages/About';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/cources' element={<Cources/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/login' element={<Login/>}/>

</Routes>

      <Footer/>
    </div>
  );
}

export default App;
