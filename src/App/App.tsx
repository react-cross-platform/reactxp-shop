import { ApolloProvider } from "react-apollo";
import * as RX from "reactxp";

import client from "../graphqlClient";
import Catalog from "../modules/catalog/Catalog/Catalog";
import s from "./styles";

abstract class App {
  init() {
    RX.App.initialize(true, true);
    RX.UserInterface.setMainView(this._renderRootView());
  }

  private _renderRootView() {
    return (
      <ApolloProvider client={client}>
        <RX.View style={s.wrapper}>
          <Catalog />
        </RX.View>
      </ApolloProvider>
    );
  }
}

export default App;
