import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Cources from './pages/Cources';

function App() {
  return (
    <div>
      <Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/cources' element={<Cources/>}/>

</Routes>

      <Footer/>
    </div>
  );
}

export default App;
