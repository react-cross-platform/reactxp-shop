import gql from "graphql-tag";
import { graphql } from "react-apollo";
import * as RX from "reactxp";

import { getCurrentNavigationParams } from "../../router/utils";
import { Props, State } from "./PropTypes";
import s from "./styles";

class CategoryView extends RX.Component<Props, State> {
  render() {
    const { data } = this.props;
    if (data.loading) {
      return (
        <RX.View style={s.wrapper}>
          <RX.ActivityIndicator color="gray" />
        </RX.View>
      );
    }
    const { allProducts } = data;
    return (
      <RX.ScrollView>
        <RX.View style={s.wrapper}>
          {allProducts!.products!.map(product => (
            <RX.Text key={product!.id!} style={s.product}>
              {product!.brand!.name} {product!.name}
            </RX.Text>
          ))}
        </RX.View>
      </RX.ScrollView>
    );
  }
}

const allProductsQuery = gql`
  query allProducts($categoryId: Int, $offset: Int, $first: Int) {
    allProducts(categoryId: $categoryId, offset: $offset, first: $first) {
      products {
        id
        name
        brand {
          id
          name
        }
      }
    }
  }
`;

const options = {
  options: (props: any) => {
    return {
      variables: {
        categoryId: getCurrentNavigationParams(props).id,
        first: 10,
        offset: 0
      }
    };
  }
};

export default graphql(allProductsQuery, options)(CategoryView);
