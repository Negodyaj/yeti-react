import "./AboutUs.scss";
import photo1 from "./Rectangle 22.png";
import photo2 from "./Rectangle 23.png";

export const AboutUs = () => {
  return (
    <div className="about-us narrow-container">
      <h2>О НАС</h2>
      <div className="about-us-content inner-container">
        <p>
          YETI — новый магазин одежды для сноубордистов. В нашем магазине вы
          найдете только самые последние модели, которые производятся по
          современным технологиям
          <br />
          из самых качественных материалов.
        </p>
        <div className="two-images-and-text">
          <div className="about-us-card">
            <img src={photo1} alt="snowboarding" />
          </div>
          <div className="about-us-card">
            <img src={photo2} alt="forest" />
          </div>
          <div className="about-us-card desktop-only">
            <span>
              Нами не движут идеи достижения коммерческих высот, мы просто
              хорошо делаем свою работу.
            </span>
            <span>2021</span>
          </div>
        </div>
        <div className="about-us-description mobile-only">
          <p>
            Нами не движут идеи достижения коммерческих высот, мы просто хорошо
            делаем свою работу.
          </p>
          <p>2021</p>
        </div>
      </div>
    </div>
  );
};
