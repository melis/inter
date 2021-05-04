import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Order from "../Order/Order";
import "./App.module.scss";
import style from "./App.module.scss";

function App() {
  return (
    <div className={style.App}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/order" exact component={Order} />
          <Route component={Page} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

function Page() {
  return (
    <div style={{ marginTop: "30px" }}>
      Страница не найдено. Вернутся на <Link to="/">главную</Link>
    </div>
  );
}
