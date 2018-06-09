import { ApolloProvider } from "react-apollo";
import RX from "reactxp";

import client from "../graphqlClient";
import router from "../router/router";
import App from "./App";

class AppWeb extends App {
  _renderRootView() {
    return <ApolloProvider client={client}>{router}</ApolloProvider>;
  }
}

export default new AppWeb();
