import { StackNavigator } from "react-navigation";

import { PathNames } from "./index";
import CategoryView from "../views/CategoryView/CategoryView";
import HomeView from "../views/HomeView/HomeView";

interface Screen {
  screen: any;
}

type Screens = { [K in PathNames]: Screen };

const screens: Screens = {
  "/": { screen: HomeView },
  "/category/:id": { screen: CategoryView }
};

const NavigationApp = StackNavigator(screens);

export default NavigationApp;
