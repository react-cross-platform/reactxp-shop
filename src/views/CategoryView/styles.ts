import * as RX from "reactxp";

import theme from "../../theme";

export default {
  wrapper: RX.Styles.createViewStyle({
    flex: 1,
    backgroundColor: "#f5f5f9",
    padding: theme.gutter,
    alignContent: "center",
    justifyContent: "center"
  }),
  product: RX.Styles.createTextStyle({
    margin: theme.gutter,
    padding: theme.gutter,
    backgroundColor: theme.card.backgroundColor
  })
};
