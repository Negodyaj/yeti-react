import { AboutUs } from "./components/AboutUs/AboutUs";
import { Catalog } from "./components/Catalog/Catalog";
import { Hero } from "./components/Hero/Hero";
import "./HomePage.scss";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Catalog />
      <div className="animated-line desktop-only">
        <div className="yeti-line">
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span>{" "}
        </div>
        <div className="yeti-line rotated-line">
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span>{" "}
        </div>
      </div>
      <div className="bestsellers desktop-only">
        <div className="bestsellers-left">
          <h2>ХИТЫ ПРОДАЖ</h2>
          <p>
            Наилучшее качество материалов, новинки товаров и последние тренды
            разных стран
          </p>
          <div className="buttons-bar">
            <button className="carousel-button left" disabled={true}>
              left
            </button>
            <button className="carousel-button right">right</button>
          </div>
        </div>
        <div className="bestsellers-right"></div>
      </div>
      <div className="musical-player container"></div>
      <div className="popular-brands narrow-container"></div>
      <div className="animated-line desktop-only">
        <div id="first-line">
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span>{" "}
        </div>
        <div id="second-line" className="rotated-line">
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span> <span>YETI</span> <span>YETI</span>{" "}
          <span>YETI</span>{" "}
        </div>
      </div>
      <div className="nice-photo"></div>
      <div className="socials narrow-container"></div>
    </>
  );
};
