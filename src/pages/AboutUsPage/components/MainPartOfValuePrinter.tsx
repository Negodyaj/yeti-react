import { AboutUsPageContext } from '../AboutUsPage';
import { useContext } from 'react';

export const MainPartOfValuePrinter = () => {
  const { currentValue } = useContext(AboutUsPageContext);

  return <div>Current value is: {currentValue}</div>;
};
