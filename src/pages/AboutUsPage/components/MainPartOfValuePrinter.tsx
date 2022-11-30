import { useContext } from "react";
import { AboutUsPageContext } from "../AboutUsPage";

export const MainPartOfValuePrinter = () => {
  const { currentValue } = useContext(AboutUsPageContext);

  return (
    <div>Current value is: {currentValue}</div>
  )
}