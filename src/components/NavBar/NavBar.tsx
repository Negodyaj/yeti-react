import "./NavBar.scss";

export const NavBar = () => {
  return (
    <nav className="desktop-only">
      <a href="#" className="nav-link">
        О МАГАЗИНЕ
      </a>
      <a href="catalog.html" className="nav-link">
        КАТАЛОГ
      </a>
      <a href="#" className="nav-link">
        КОНТАКТЫ
      </a>
      <a href="#" className="nav-link">
        ЛИЧНЫЙ КАБИНЕТ
      </a>
      <a href="#" className="nav-link">
        КОРЗИНА (<span id="goods-count">0</span>)
      </a>
    </nav>
  );
};
