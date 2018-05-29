import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { Platform } from "reactxp";


const GRAPHQL_URL = `${
  Platform.getType() == "android" ? "http" : "https"
}://shop.serga.name/graphql`;

const httpLink = createHttpLink({
  uri: GRAPHQL_URL,
  credentials: "include"
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default client;
