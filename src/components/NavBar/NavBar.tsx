import './NavBar.scss';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="desktop-only">
      <Link to="/about" className="nav-link">
        О МАГАЗИНЕ
      </Link>
      <Link to="/catalog" className="nav-link">
        КАТАЛОГ
      </Link>
      <Link to="/contacts" className="nav-link">
        КОНТАКТЫ
      </Link>
      <Link to="/profile" className="nav-link">
        ЛИЧНЫЙ КАБИНЕТ
      </Link>
      <Link to="/cart" className="nav-link">
        КОРЗИНА (<span id="goods-count">0</span>)
      </Link>
    </nav>
  );
};
