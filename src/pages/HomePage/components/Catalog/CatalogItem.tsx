import { ArrowLink } from '../../../../components/ArrowLink/ArrowLink';
import './CatalogItem.scss';

interface CatalogItemProps {
  isWide?: boolean;
  imageSrc: string;
  linkTitle: string;
  linkHref: string;
}

export const CatalogItem = (props: CatalogItemProps) => {
  const { isWide, imageSrc, linkTitle, linkHref } = props;
  return (
    <div className={ `grid-item ${ isWide ? 'wide' : 'small' }` } >
      <img src={imageSrc} alt="" />
      <ArrowLink title={linkTitle} href={linkHref} />
    </div>
  );
};
