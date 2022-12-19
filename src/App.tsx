import './App.scss';
import { AboutUsPage } from './pages/AboutUsPage/AboutUsPage';
import { CartPage } from './pages/CartPage/CartPage';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { Header } from './pages/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { TestPage } from './pages/TestPage/TestPage';
import { baseUrl } from './constants';
import { getValueFromLocalStorage } from './services/localStorage.service';
import { logIn } from './store/currentUser.slice';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const authToken = getValueFromLocalStorage('authToken');
    if (authToken) {
      fetch(`${baseUrl}/users/current`)
        .then((response) => response.json())
        .then((data) => dispatch(logIn({ user: data })));
    } else {
      navigate('/login');
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/sign-up" element={<RegisterPage />} />
        </Routes>
      </main>
      <footer>Footer</footer>
    </div>
  );
};
