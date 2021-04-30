import React from "react";
import Catalog from "../Catalog/Catalog";
import Faq from "../FAQ/Faq";
import InfoBlock from "../InfoBlock/InfoBlock";
import News from "../News/News";
import Palayer from "../Player/Player";

const Main = () => {
  return (
    <>
      <Palayer />
      <InfoBlock />
      <Catalog />
      <Faq />
      <News />
    </>
  );
};
export default Main;
