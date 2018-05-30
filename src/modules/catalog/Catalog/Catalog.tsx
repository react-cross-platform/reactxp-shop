import gql from "graphql-tag";
import { graphql } from "react-apollo";
import * as RX from "reactxp";

import { getCatalog } from "../../utils";
import { Props, State } from "./PropTypes";
import s from "./styles";
import { navigate } from "../../../router/utils";

class Catalog extends RX.Component<Props, State> {
  render() {
    const { data } = this.props;
    if (data.loading) {
      return (
        <RX.View style={s.wrapper}>
          <RX.ActivityIndicator color="gray" />
        </RX.View>
      );
    }
    const { categories } = data;
    const catalog = getCatalog(categories!);
    const { startCategories, childrenMap } = catalog;
    return (
      <RX.View style={s.wrapper}>
        <RX.ScrollView>
          {startCategories.map(parent => (
            <RX.View key={parent.id}>
              <RX.Text style={s.subCatalog.name}>{parent.name}</RX.Text>
              <RX.View key={parent.id} style={s.subCatalog.wrapper}>
                {childrenMap[parent.id].map(category => (
                  <RX.View key={category.id} style={s.category.wrapper}>
                    <RX.View
                      onPress={() =>
                        navigate("/category/:id", { id: category.id })
                      }
                      style={s.category.card}
                    >
                      <RX.Image
                        resizeMode="contain"
                        style={s.category.image}
                        source={category.image!.src!}
                      />
                      <RX.Text style={s.category.name} key={category.id}>
                        {category.name}
                      </RX.Text>
                    </RX.View>
                  </RX.View>
                ))}
              </RX.View>
            </RX.View>
          ))}
        </RX.ScrollView>
      </RX.View>
    );
  }
}

const categoriesQuery = gql`
  query categories {
    categories {
      id
      name
      alias
      parent {
        id
      }
      image {
        src
      }
    }
  }
`;

export default graphql(categoriesQuery)(Catalog as any);
