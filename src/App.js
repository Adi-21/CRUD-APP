import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Add from './components/Add';
import Navbar from './components/layout/Navbar';
import Edituser from './components/Edituser';
import User from './components/User';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/add' element={<Add />} />
          <Route exact path='/edituser/:id' element={<Edituser />} />
          <Route exact path='/user/:id' element={<User />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;