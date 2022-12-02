import './App.scss';
import { AboutUsPage } from './pages/AboutUsPage/AboutUsPage';
import { CartPage } from './pages/CartPage/CartPage';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { Header } from './pages/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { Route, Routes } from 'react-router-dom';
import React from 'react';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
      <footer>Footer</footer>
    </div>
  );
};
