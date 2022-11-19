import { Carousel } from "../../components/Carousel/Carousel";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Catalog } from "./components/Catalog/Catalog";
import { Hero } from "./components/Hero/Hero";
import "./HomePage.scss";
import product1 from "../../assets/images/product1.png";
import product2 from "../../assets/images/product2.png";
import product3 from "../../assets/images/product3.png";

export const HomePage = () => {  
  const products = [
    {
      id: 1,
      imageSrc: product1,
      title: "Женская сноубордическая куртка Sula",
      price: 17490,
    },
    {
      id: 2,
      imageSrc: product2,
      title: "Мужская сноубордическая куртка Sula",
      price: 19490,
    },
    {
      id: 3,
      imageSrc: product3,
      title: "Женская сноубордическая куртка Sula",
      price: 15220,
    },
    {
      id: 4,
      imageSrc: product2,
      title: "Мужская сноубордическая куртка Sula",
      price: 13320,
    },
    {
      id: 5,
      imageSrc: product1,
      title: "Женская сноубордическая куртка Sula",
      price: 16490,
    },
    {
      id: 6,
      imageSrc: product2,
      title: "Мужская сноубордическая куртка Sula",
      price: 17490,
    },
    {
      id: 7,
      imageSrc: product3,
      title: "Женская сноубордическая куртка Sula",
      price: 12490,
    },
    {
      id: 8,
      imageSrc: product2,
      title: "Мужская сноубордическая куртка Sula",
      price: 15490,
    },
  ];
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
      <Carousel products={products} title="ХИТЫ ПРОДАЖ" description="Наилучшее качество материалов, новинки товаров и последние тренды разных стран" />

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
