import React from "react";
import { connect } from "react-redux";
import { View, Text, Button, StyleSheet } from "react-native";

class CartItem extends React.Component {
  removeFromCart(id) {
    const market = this.props.market.cartItems;
    const { dispatch } = this.props;
    if (market[id].count > 0) {
      dispatch({
        type: "DEL_FROM_CART",
        id: id
      });
      dispatch({
        type: "FIND_TOTAL",
        data: market
      });
    }
  }
  render() {
    return (
      <View style={styles.marketItem}>
        <View>
          <Text>
            {this.props.name} x{this.props.count} - &#36;{this.props.total}
          </Text>
        </View>
        <View>
          <Button
            title="remove"
            onPress={() => {
              this.removeFromCart(this.props.id);
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  marketItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

function mapStateToProps(state) {
  return {
    market: state,
    db: state.dbReducer
  };
}

export default connect(mapStateToProps)(CartItem);
