import { AboutUsPageContext } from '../AboutUsPage';
import { useContext } from 'react';

export const Clicker = () => {
  const { onReduce, onIncrease } = useContext(AboutUsPageContext);

  return (
    <>
      <button onClick={onReduce}>Reduce</button>
      <button onClick={onIncrease}>Increase</button>
    </>
  );
};
