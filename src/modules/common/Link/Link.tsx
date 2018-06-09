import { compile } from "path-to-regexp";
import RX from "reactxp";

import { navigate } from "../../../router/utils";
import { Props, State } from "./PropTypes";

class Link extends RX.Component<Props, State> {
  render() {
    const { children, path, params } = this.props;
    const url = `#${compile(path)(params)}`;
    return (
      <RX.Link
        selectable={true}
        url={url}
        style={[
          this.props.style,
          {
            textDecorationLine: "none",
            color: "black"
          }
        ]}
        onPress={() => navigate({ path, params })}
      >
        {children}
      </RX.Link>
    );
  }
}

export default Link;
