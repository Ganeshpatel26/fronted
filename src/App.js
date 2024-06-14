import About from './Component/About';
// import Bookdemo from './Component/Bookdemo';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Pricing from './Component/Pricing';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Bill from './Component/Bill';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/bills' element={<Bill />} />
          {/* <Route path='/bookdemo' element={<Bookdemo />} /> */}
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
