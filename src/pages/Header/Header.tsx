import './Header.scss';
import { Link } from 'react-router-dom';
import { NavBar } from '../../components/NavBar/NavBar';
import logo from './logo.svg';

export const Header = () => {
  return (
    <header>
      <div className="narrow-container">
        <Link to="/">
          <img src={logo} alt="Our logo" />
        </Link>
        <NavBar />
        <button className="burger-menu mobile-only">burger</button>
      </div>
    </header>
  );
};
