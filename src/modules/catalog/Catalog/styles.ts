import * as RX from "reactxp";

const { width } = RX.UserInterface.measureWindow();

export default {
  wrapper: RX.Styles.createScrollViewStyle({
    flex: 1,
    backgroundColor: "#f5f5f9"
  }),
  subCatalog: {
    wrapper: RX.Styles.createViewStyle({
      flexDirection: "row",
      flexWrap: "wrap"
    }),
    name: RX.Styles.createTextStyle({
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
      borderColor: "#ddd"
    }),
    name: RX.Styles.createTextStyle({
      textAlign: "center"
    }),
    image: RX.Styles.createImageStyle({
      height: 50
    })
  }
};
