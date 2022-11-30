import { useContext } from "react";
import { AboutUsPageContext } from "../AboutUsPage";

export const Clicker = () => {
  const { onReduce, onIncrease } = useContext(AboutUsPageContext);

  return (
    <>
      <button onClick={onReduce}>Reduce</button>
      <button onClick={onIncrease}>Increase</button>
    </>
  );
}