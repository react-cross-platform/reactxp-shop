import { Route, Router, Switch } from "react-router";
import * as RX from "reactxp";
import CategoryView from "../views/CategoryView/CategoryView";
import HomeView from "../views/HomeView/HomeView";
import history from "./history.web";
import { RouteInterface } from "./index";

export const routes: RouteInterface[] = [
  {
    path: "/",
    exact: true,
    component: HomeView
  },
  {
    path: "/category/:id",
    component: CategoryView
  }
];

const router = (
  <Router history={history}>
    <Switch>{routes.map((route, i) => <Route key={i} {...route} />)} </Switch>
  </Router>
);

export default router;
