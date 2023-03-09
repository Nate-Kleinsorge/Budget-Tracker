import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from 'components/Header.js';
import Footer from 'components/Footer.js';
import Home from 'pages/Home.js';
import Dashboard from 'pages/Dashboard.js';
import Budget from 'pages/Budget.js';
import Login from 'pages/Login.js';

function App() {
  return (
    <HelmetProvider >
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
    </HelmetProvider>
  );
}

export default App;



// import React, { useState } from 'react';
// import BarChart from './components/BarChart';
// import { incomeData } from  './Data';


// function App() {
//   const [totalIncome, setTotalIncome] = useState({
//     labels: incomeData.map((data) => data.month),
//     datasets: [{
//       label: 'Total Income',
//       data: incomeData.map((data) => data.amount),
//     }]
//   })

//   return (
//     <div>
//       <p>Bar Chart</p>
//       <BarChart Data={totalIncome} />
//     </div>
//   );
// }


// export default App;





