import { QueryResult } from "react-apollo";

import { CategoryType } from "../../../typings/types";

interface OwnProps {}

interface CategoriesData extends QueryResult {
  categories: [CategoryType] | null;
}

interface GraphQLProps {
  data: CategoriesData;
}

export interface Props extends OwnProps, GraphQLProps {}
