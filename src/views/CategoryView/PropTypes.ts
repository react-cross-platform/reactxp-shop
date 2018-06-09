import { QueryResult } from "react-apollo";

import { NavigationProps } from "../../router/index";
import { AllProductsType } from "../../typings/types";

interface OwnProps {}

interface DataAllProducts extends QueryResult {
  allProducts?: AllProductsType;
}

interface GraphQLProps {
  data: DataAllProducts;
}

export interface Props extends OwnProps, NavigationProps, GraphQLProps {}

export interface State {}
