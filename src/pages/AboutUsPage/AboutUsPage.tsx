import { createContext, useState } from 'react';
import './AboutUsPage.scss';
import { Clicker } from './components/Clicker';
import { ValuePrinter } from './components/ValuePrinter';

const aboutUsPageData = {
  currentValue: 30,
  onReduce: () => {},
  onIncrease: () => {},
};

export const AboutUsPageContext = createContext(aboutUsPageData);

export const AboutUsPage = () => {
  const [currentValue, setCurrentValue] = useState(aboutUsPageData.currentValue);

  const onReduce = () => {
    setCurrentValue(currentValue - 1);
  };

  const onIncrease = () => {
    setCurrentValue(currentValue + 1);
  };

  return (
    <AboutUsPageContext.Provider value={{
      currentValue: currentValue,
      onReduce: onReduce,
      onIncrease: onIncrease,
    }}>
      <h1>Some text about us</h1>
      <ValuePrinter />
      <Clicker />
    </AboutUsPageContext.Provider>
  );
}