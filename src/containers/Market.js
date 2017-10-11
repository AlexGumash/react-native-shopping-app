import React from "react";
import { connect } from "react-redux";
import { View } from "react-native";

import MarketProduct from "../components/Market-item.js";

class Market extends React.Component {
  render() {
    const items = this.props.market.cartItems;
    return (
      <View>
        {Object.keys(items).map((object, index) => {
          return (
            <MarketProduct
              id={items[object].id}
              key={index}
              name={items[object].name}
              price={items[object].price}
              available={items[object].available}
            />
          );
        })}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    market: state
  };
}

export default connect(mapStateToProps)(Market);
