import "./ArrowLink.scss";

export interface ArrowLinkProps {
  title: string;
  href: string;
  isOrange?: boolean;
}

export const ArrowLink = (props: ArrowLinkProps) => {
  const { title, href, isOrange } = props;
  return (
    <a href={href} className={ isOrange ? 'orange' : '' }>
      { title }
      <svg
        width="31"
        height="31"
        viewBox="0 0 31 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1H30V30" stroke="black" stroke-width="2" />
        <path d="M30 1L1.58 29.42L1 30" stroke="black" stroke-width="2" />
      </svg>
    </a>
  );
};
