import { compile } from "path-to-regexp";

import { NavigationProps, Url } from ".";
import history from "./history.web";

export const getCurrentNavigationParams = (props: NavigationProps) => {
  return props.match!.params;
};

export const navigate = (url: Url) => {
  const { path, params } = url;
  const pathname = compile(path)(params);
  history.push(pathname);
};
