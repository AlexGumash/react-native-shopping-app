import React from "react";
import { connect } from "react-redux";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import imageForItem from "../helpers/images.js";

class Product extends React.Component {
  clickBuyButton(id) {
    const market = this.props.market.cartItems;
    if (market[this.props.id].available > 0) {
      this.props.dispatch({
        type: "ADD_TO_CART",
        id: id
      });
      this.props.dispatch({
        type: "FIND_TOTAL",
        data: market
      });
    }
  }
  render() {
    const itemImage = imageForItem[this.props.id];
    return (
      <View style={styles.marketItem}>
        <View style={{ backgroundColor: "blue" }}>
          <Image
            source={itemImage}
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
              backgroundColor: "red"
            }}
          />
        </View>
        <View>
          <Text>
            {this.props.name} - &#36;{this.props.price} available:{this.props.available}
          </Text>
        </View>
        <View>
          <Button
            title="add to cart"
            onPress={() => {
              this.clickBuyButton(this.props.id);
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
    market: state
  };
}

export default connect(mapStateToProps)(Product);
