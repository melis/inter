import React, { Suspense } from "react";
// import Catalog from "../Catalog/Catalog";
import Faq from "../FAQ/Faq";
import InfoBlock from "../InfoBlock/InfoBlock";
// import News from "../News/News";
import Palayer from "../Player/Player";
const Catalog = React.lazy(() => import("../Catalog/Catalog"));
const News = React.lazy(() => import("../News/News"));
const Main = () => {
  return (
    <>
      <Palayer />
      <InfoBlock />
      <Suspense fallback={<div>Загрузка...</div>}>
        <Catalog />
      </Suspense>
      <Faq />
      <Suspense fallback={<div>Загрузка...</div>}>
        <News />
      </Suspense>
    </>
  );
};
export default Main;
