import { ApolloProvider } from "react-apollo";
import * as RX from "reactxp";
import client from "../graphqlClient";
import NavigationApp from "../router/router.native";
import App from "./App";
import { setContainer } from "../router/utils.native";

class AppNative extends App {
  _renderRootView() {
    return (
      <ApolloProvider client={client}>
        <NavigationApp
          ref={(navigatorRef: any) => {
            setContainer(navigatorRef);
          }}
        />
      </ApolloProvider>
    );
  }
}

export default new AppNative();
