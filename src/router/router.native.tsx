import { StackNavigator } from "react-navigation";

import CategoryView from "../views/CategoryView/CategoryView";
import HomeView from "../views/HomeView/HomeView";

const NavigationApp = StackNavigator({
  Home: { screen: HomeView },
  Category: { screen: CategoryView }
});

export default NavigationApp;
