import { ParseOptions } from "path-to-regexp";

export type Pathes = "/" | "/category/:id" | "/product/:id";

export interface Url {
  path: Pathes;
  params?: object;
}

export interface NavigationProps {
  match?: any;
  history: any;
  location: any;
}

interface RouteInterface {
  path: Pathes;
  exact?: boolean;
  component: any;
}

export interface Url {
  path: Pathes;
  params?: object;
}
