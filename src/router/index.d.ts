export type PathNames = "/" | "/category/:id" | "/product/:id";

export interface NavigationProps {
  match?: any;
  history: any;
  location: any;
}

interface RouteInterface {
  path: PathNames;
  exact?: boolean;
  component: any;
}
