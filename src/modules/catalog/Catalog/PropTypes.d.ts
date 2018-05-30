import { QueryResult } from "react-apollo";

import { CategoryType } from "../../../typings/types";
import { NavigationProps } from "../../../router/index";

interface OwnProps {}

interface CategoriesData extends QueryResult {
  categories: [CategoryType] | null;
}

interface GraphQLProps {
  data: CategoriesData;
}

export interface Props extends OwnProps, NavigationProps, GraphQLProps {}

export interface State {}
