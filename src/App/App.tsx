import { ApolloProvider } from "react-apollo";
import * as RX from "reactxp";

import client from "../graphqlClient";

abstract class App {
  init() {
    RX.App.initialize(true, true);
    RX.UserInterface.setMainView(this._renderRootView());
  }

  private _renderRootView() {
    return (
      <ApolloProvider client={client}>
        <RX.View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <RX.Text>Hello Cross-Platform app!</RX.Text>
        </RX.View>
      </ApolloProvider>
    );
  }
}

export default App;
