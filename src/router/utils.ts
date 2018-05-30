import { compile } from "path-to-regexp";

import { PathNames, NavigationProps } from "./index";
import history from "./history.web";


export const getCurrentNavigationParams = (props: NavigationProps) => {
  return props.match!.params;
};

export const navigate = (routeName: PathNames, params?: object) => {
  const pathname = compile(routeName)(params || {});
  history.push(pathname);
};
