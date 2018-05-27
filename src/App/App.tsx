import * as RX from "reactxp";

abstract class App {
  init() {
    RX.App.initialize(true, true);
    RX.UserInterface.setMainView(this._renderRootView());
  }

  private _renderRootView() {
    return (
      <RX.View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <RX.Text>Hello Cross-Platform app!</RX.Text>
      </RX.View>
    );
  }
}

export default App;
