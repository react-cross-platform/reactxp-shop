import * as RX from "reactxp";

import theme from "../../../theme";

const { width } = RX.UserInterface.measureWindow();

export default {
  wrapper: RX.Styles.createViewStyle({
    flex: 1,
    backgroundColor: theme.backgroundColor,
    justifyContent: "center",
    alignItems: "center"
  }),
  subCatalog: {
    wrapper: RX.Styles.createViewStyle({
      flexDirection: "row",
      flexWrap: "wrap"
    }),
    name: RX.Styles.createTextStyle({
      fontSize: 24,
      fontWeight: "bold",
      padding: 20,
      textAlign: "center"
    })
  },
  category: {
    wrapper: RX.Styles.createViewStyle({
      flex: 1,
      width: width * 0.5
    }),
    card: RX.Styles.createViewStyle({
      flex: 1,
      backgroundColor: "white",
      margin: 2,
      padding: 5,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: theme.card.borderColor
    }),
    name: RX.Styles.createTextStyle({
      fontSize: 20,
      textAlign: "center",
      marginTop: 8,
      marginBottom: 8
    }),
    image: RX.Styles.createImageStyle({
      height: 100
    })
  }
};
