import { QueryResult } from "react-apollo";

import { NavigationProps } from "../../router/index";
import { ProductType } from "../../typings/types";

interface OwnProps {}

interface DataProduct extends QueryResult {
  product?: ProductType
}

interface GraphQLProps {
  data: DataProduct
}

export interface Props extends OwnProps, GraphQLProps, NavigationProps {}

export interface State {}
