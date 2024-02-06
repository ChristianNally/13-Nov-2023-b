import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';
import Product from './components/Product';
import Products from './components/Products';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className="App">
      <h2>React Router Demo</h2>

      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="*" element={<h2>404 page</h2>} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/admin" element={<h2>Hidden admin page</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
