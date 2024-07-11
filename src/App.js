import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import DocumentPage from './components/DocumentPage';
import DocumentDetailPage from './components/DocumentDetailPage';
import Admin from './components/Admin';

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/documents/:category/:subcategory" element={<DocumentPage />} />
        <Route path="/document/:category/:subcategory/:filename" element={<DocumentDetailPage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
