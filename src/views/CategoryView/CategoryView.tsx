import gql from "graphql-tag";
import { graphql } from "react-apollo";
import RX from "reactxp";

import Link from "../../modules/common/Link/Link";
import { Url } from "../../router";
import { getCurrentNavigationParams, navigate } from "../../router/utils";
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
            <RX.View key={product!.id!} style={s.product.wrapper}>
              <RX.View
                onPress={() => navigate(this.getProductLinkProps(product))}
                style={s.product.card}
              >
                <RX.Image
                  resizeMode="contain"
                  style={s.product.image}
                  source={product!.images![0]!.src!}
                />
                <RX.Text style={s.product.name}>{product!.name}</RX.Text>

                <RX.View style={s.product.rowStyle}>
                  <Link {...this.getProductLinkProps(product)}>
                    {`${product!.brand!.name} ${
                      product!.subProducts[0]!.article
                    }`}
                  </Link>
                </RX.View>

                <RX.Text style={s.product.price}>
                  {product!.subProducts[0]!.price} грн.
                </RX.Text>
              </RX.View>
            </RX.View>
          ))}
        </RX.View>
      </RX.ScrollView>
    );
  }

  private getProductLinkProps = (product: any): Url => {
    return {
      path: "/product/:id",
      params: {
        id: product!.id
      }
    };
  };
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
        images {
          src
        }
        subProducts {
          price
          article
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
