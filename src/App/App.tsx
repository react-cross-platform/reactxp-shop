import { ApolloProvider } from "react-apollo";
import * as RX from "reactxp";

import client from "../graphqlClient";
import Catalog from "../modules/catalog/Catalog/Catalog";

abstract class App {
  init() {
    RX.App.initialize(true, true);
    RX.UserInterface.setMainView(this._renderRootView());
  }

  protected _renderRootView() {
    return (
      <ApolloProvider client={client}>
        <Catalog />
      </ApolloProvider>
    );
  }
}

export default App;
