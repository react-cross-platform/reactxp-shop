import * as RX from "reactxp";

import { Pathes } from "../../../router";

interface OwnProps {
  path: Pathes;
  params?: object;
  style?: any;
}

export interface Props extends OwnProps {}

export interface State {}

export default abstract class Link extends RX.Component<Props, State> {}
