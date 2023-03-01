import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from 'components/Header.js';
import Footer from 'components/Footer.js';
import Dashboard from 'pages/Dashboard.js';
import Budget from 'pages/Budget.js';
import About from 'pages/About.js';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/Budget' element={<Budget />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
