import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { decrease, increase, loadUser } from './testPageSlice';

export const TestPage = () => {
  const state = useSelector((state: RootState) => state.testPage);
  const dispatch = useDispatch();

  const handleIncreaseClick = () => dispatch(increase());
  const handleDecreaseClick = () => dispatch(decrease());
  const handleLoadUserClick = () => dispatch(loadUser({ name: 'Merry', lastName: 'Poppins' }));

  return (
    <>
      <div>Name: {state.name}</div>
      <div>Last Name: {state.lastName}</div>
      <div>Balance: {state.balance}</div>
      <button onClick={handleIncreaseClick}>Increase</button>
      <button onClick={handleDecreaseClick}>Decrease</button>
      <button onClick={handleLoadUserClick}>Load user's data</button>
    </>
  );
};
