import './Header.scss';
import { Link } from 'react-router-dom';
import { NavBar } from '../../components/NavBar/NavBar';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import logo from './logo.svg';

export const Header = () => {
  const currentUser = useSelector((state: RootState) => state.currentUser).userInfo;
  return (
    <header>
      <div className="narrow-container">
        <Link to="/">
          <img src={logo} alt="Our logo" />
        </Link>
        <NavBar />
        <div className="current-user">
          {currentUser?.firstName} {currentUser?.lastName}
        </div>
        <button className="burger-menu mobile-only">burger</button>
      </div>
    </header>
  );
};
