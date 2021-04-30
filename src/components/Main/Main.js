import React, { Suspense } from "react";
// import Catalog from "../Catalog/Catalog";
import Faq from "../FAQ/Faq";
import InfoBlock from "../InfoBlock/InfoBlock";
import News from "../News/News";
import Palayer from "../Player/Player";
const Catalog = React.lazy(() => import("../Catalog/Catalog"));

const Main = () => {
  return (
    <>
      <Palayer />
      <InfoBlock />
      <Suspense fallback={<div>Загрузка...</div>}>
        <Catalog />
      </Suspense>
      <Faq />
      <News />
    </>
  );
};
export default Main;
