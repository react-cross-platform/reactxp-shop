import gql from "graphql-tag";
import { graphql } from "react-apollo";
import * as RX from "reactxp";

import { getCurrentNavigationParams } from "../../router/utils";
import { Props, State } from "./PropTypes"
import s from "./styles";

class ProductView extends RX.Component<Props, State> {
  render() {
    const { data } = this.props

    if (data.loading) {
      return (
        <RX.View style={s.wrapper}>
          <RX.ActivityIndicator color="gray" />
        </RX.View>
      )
    }

    const product = data.product!
    return (
      <RX.ScrollView style={s.wrapper}>
        <RX.Text>{product.name}</RX.Text>
      </RX.ScrollView>
    )
  }
}

const productQuery = gql`
  query product($productId: Int) {
    product(id: $productId) {
      name
    }
  }
`

const options = {
  options: (props: Props) => {
    return {
      variables: {
        productId: getCurrentNavigationParams(props).id
      }
    }
  }
}

export default graphql(productQuery, options)(ProductView as any)
