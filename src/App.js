import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Applications from './pages/Applications';
import Listing from './pages/Listing';
import Layout from './components/layout'
import './input.css'

function App() {
  return (
    <>
    <Layout>
      <Router>
          <Routes>
            <Route exact path="/" element={<Applications />} />
            <Route path="/listing" element={<Listing />} />
          </Routes>
        </Router>
    </Layout>
    </>

  );
}

export default App;
