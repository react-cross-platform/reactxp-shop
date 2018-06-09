import * as RX from "reactxp";

import theme from "../../theme";

const { width } = RX.UserInterface.measureWindow();

export default {
  wrapper: RX.Styles.createViewStyle({
    flex: 1,
    backgroundColor: "#f5f5f9",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap"
  }),
  product: {
    wrapper: RX.Styles.createTextStyle({
      flex: 1,
      width: width * 0.5,
    }),

    card: RX.Styles.createTextStyle({
      flex: 1,
      backgroundColor: "white",
      margin: 2,
      padding: 5,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: theme.card.borderColor
    }),
    image: RX.Styles.createTextStyle({
      height: 140,
      marginTop: 10,
      marginBottom: 10
    }),
    name: RX.Styles.createTextStyle({
      textAlign: "left"
    }),
    brand: RX.Styles.createTextStyle({
      marginRight: 5
    }),
    article: RX.Styles.createTextStyle({
    }),
    price: RX.Styles.createLinkStyle({
      textAlign: "left",
      fontWeight: "bold",
      fontSize: 18,
      marginTop: 8,
      marginBottom: 8
    }),
    rowStyle: RX.Styles.createTextStyle({
      flex: 1,
      flexDirection: 'row',
    })
  }
};
