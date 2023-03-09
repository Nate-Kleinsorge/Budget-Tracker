import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from 'components/Header.js';
import Footer from 'components/Footer.js';
import Home from 'pages/Home.js';
import Dashboard from 'pages/Dashboard.js';
import Budget from 'pages/Budget.js';
import Login from 'pages/Login.js';
import { useEffect, useState } from 'react';
import "./App.scss"

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  },[]);

    const renderContent = () => (<HelmetProvider >
      <Helmet>
        <title>Budget Tracker</title>
      </Helmet>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/budget' element={<Budget />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>)



  return (
    <section className="Parallax">
      <div
        className="Parallax__background"
        style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
      />
      <div
        className="Parallax__background-triangles"
        style={{ transform: `translateY(${offsetY * 0.8}px)` }}
      />
      <div className="Parallax__content">{renderContent()}</div>
    </section>
  );


}


export default App;
