import * as RX from "reactxp";

import Catalog from "../../modules/catalog/Catalog/Catalog";
import { Props, State } from "./PropTypes";

class HomeView extends RX.Component<Props, State> {
  render() {
    return <Catalog />;
  }
}
export default HomeView;
