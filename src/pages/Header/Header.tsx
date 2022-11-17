import { NavBar } from '../../components/NavBar/NavBar';
import logo from './logo.svg';
import './Header.scss';

export const Header = () => {
  return (
    <header>
      <div className="narrow-container">
        <img src={logo} alt="Our logo" />
        <NavBar />
        <button className="burger-menu mobile-only">burger</button>
      </div>
    </header>
  );
};
