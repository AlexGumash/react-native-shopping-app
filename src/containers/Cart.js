import React from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";

import CartItem from "../components/Cart-item.js";

class Cart extends React.Component {
  render() {
    const items = this.props.market.cartItems;
    return (
      <View>
        {Object.keys(items).map((item, index) => {
          if (items[item].count > 0) {
            return (
              <CartItem
                total={items[item].total}
                count={items[item].count}
                key={index}
                id={items[item].id}
                name={items[item].name}
              />
            );
          }
        })}
        <View>
          <Text>
            Total: &#36;{this.props.market.total.total} -{" "}
            {this.props.market.total.countOfItems} items
          </Text>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    market: state
  };
}

export default connect(mapStateToProps)(Cart);
