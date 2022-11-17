import "./Hero.scss";
import desktopImage from './hero-photo.png';
import mobileImage from './hero-image-mobile.png';
import { ArrowLink } from "../../../../components/ArrowLink/ArrowLink";

export const Hero = () => {
  return (
    <div className="hero-block container">
      <h1 className="narrow-container">
        ТЕХНОЛОГИЧНАЯ
        <br />
        ОДЕЖДА <br className="mobile-only" />
        ДЛЯ ЗИМНЕГО
        <br />
        СПОРТА
      </h1>
      <picture className="about-us-img">
        <source
          srcSet={mobileImage}
          media="(max-width: 900px)"
        />
        <source srcSet={desktopImage} />
        <img srcSet={desktopImage} alt="hero-image" />
      </picture>
      <div className="narrow-container">
        <div className="inner-container">
          <p>
            НОВАЯ СНОУБОРДИЧЕСКАЯ
            <br />
            КОЛЛЕКЦИЯ
          </p>
          <ArrowLink title="ЗА ПОКУПКАМИ" href="#" isOrange={true} />
        </div>
      </div>
    </div>
  );
};
