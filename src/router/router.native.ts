import { StackNavigator } from "react-navigation";

import { Pathes } from "./index";
import CategoryView from "../views/CategoryView/CategoryView";
import ProductView from "../views/ProductView/ProductView";
import HomeView from "../views/HomeView/HomeView";

interface Screen {
  screen: any;
}

type Screens = { [K in Pathes]: Screen };

const screens: Screens = {
  "/": { screen: HomeView },
  "/category/:id": { screen: CategoryView },
  "/product/:id": { screen: ProductView }

};

const NavigationApp = StackNavigator(screens);

export default NavigationApp;
