import './CatalogItem.scss';
import { ArrowLink } from '../../../../components/ArrowLink/ArrowLink';

interface ICatalogItemProps {
  isWide?: boolean;
  imageSrc: string;
  linkTitle: string;
  linkHref: string;
}

export const CatalogItem = (props: ICatalogItemProps) => {
  const { isWide, imageSrc, linkTitle, linkHref } = props;
  return (
    <div className={`grid-item ${isWide ? 'wide' : 'small'}`}>
      <img src={imageSrc} alt="" />
      <ArrowLink title={linkTitle} href={linkHref} />
    </div>
  );
};
