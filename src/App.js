import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Cources from './pages/Cources';
import About from './pages/About';
import Login from './pages/Login';
import Edit from './pages/Edit';
import Contact from './pages/Contact';
import Hostel from './pages/Hostel';
import News from './pages/News';
import Latest from './pages/Latest';
import Examination from './pages/Examination';
import Events from './pages/Events';
import Circular from './pages/Circular';

function App() {
  return (
    <div>
      <Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/cources' element={<Cources/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/edit' element={<Edit/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/hostel' element={<Hostel/>}/>
  <Route path='/news' element={<News/>}/>
  <Route path='/latest' element={<Latest/>}/>
  <Route path='/circular' element={<Circular/>}/>
  <Route path='/examination' element={<Examination/>}/>
  <Route path='/events' element={<Events/>}/>
  <Route path='/news' element={<News/>}/>



</Routes>

      <Footer/>
    </div>
  );
}

export default App;
