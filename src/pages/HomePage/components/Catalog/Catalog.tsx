import './Catalog.scss';
import { CatalogItem } from './CatalogItem';
import accessories from './assets/Rectangle 34.png';
import boots from './assets/Rectangle 29.png';
import clothes from './assets/Rectangle 31.png';
import helmets from './assets/Rectangle 33.png';
import masks from './assets/Rectangle 32.png';
import mounts from './assets/Rectangle 28.png';
import snowboards from './assets/Rectangle 27.png';

export const Catalog = () => {
  return (
    <div className="catalog container desktop-only">
      <h2>КАТАЛОГ</h2>
      <div className="catalog-grid">
        <CatalogItem isWide={true} imageSrc={snowboards} linkTitle="СНОУБОРДЫ" linkHref="#" />
        <CatalogItem imageSrc={mounts} linkTitle="КРЕПЛЕНИЯ" linkHref="#" />
        <div className="grid-item empty"></div>
        <CatalogItem imageSrc={boots} linkTitle="БОТИНКИ" linkHref="#" />
        <CatalogItem isWide={true} imageSrc={clothes} linkTitle="ОДЕЖДА" linkHref="#" />
        <div className="grid-item empty"></div>
        <CatalogItem imageSrc={masks} linkTitle="МАСКИ" linkHref="#" />
        <CatalogItem imageSrc={helmets} linkTitle="ШЛЕМЫ И ЗАЩИТА" linkHref="#" />
        <CatalogItem imageSrc={accessories} linkTitle="АКСЕССУАРЫ" linkHref="#" />
      </div>
    </div>
  );
};
