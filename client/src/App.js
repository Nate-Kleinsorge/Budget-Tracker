import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from 'utils/auth.js';
import Header from 'components/Header.js';
import Footer from 'components/Footer.js';
import Home from 'pages/Home.js';
import Dashboard from 'pages/Dashboard.js';
import Budget from 'pages/Budget.js';
import CreateAccount from 'pages/create-acc.';
import Login from 'pages/login.js';

function App() {
  return (
      <BrowserRouter>
    <AuthProvider>
    <HelmetProvider >
      <Helmet>
        <title>Budget Tracker</title>
      </Helmet>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/budget' element={<Budget />} />
            <Route path='/login' element={<Login />} />
            <Route path='/create-acc' element={<CreateAccount />} />
          </Routes>
        </main>
        <Footer />
    </HelmetProvider>
    </AuthProvider>
      </BrowserRouter>
  );
}

export default App;
