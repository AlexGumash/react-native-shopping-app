import React from "react";
import { connect } from "react-redux";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import imageForItem from "../helpers/images.js";

class AboutItem extends React.Component {
  // static navigationOptions = {
  //   title: "About item"
  // };
  // clickBuyButton(id) {
  //   const market = this.props.market.cartItems;
  //   if (market[this.props.id].available > 0) {
  //     this.props.dispatch({
  //       type: "ADD_TO_CART",
  //       id: id
  //     });
  //     this.props.dispatch({
  //       type: "FIND_TOTAL",
  //       data: market
  //     });
  //   }
  // }
  render() {
    // const itemImage = imageForItem[this.props.id];
    return (
      <View>
        <View>
          <Text>KEK</Text>
        </View>
      </View>
    );
  }
}

// <Button
//   title="add to cart"
//   onPress={() => {
//     this.clickBuyButton(this.props.id);
//   }}
// />

// const styles = StyleSheet.create({
//   marketItem: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     borderBottomWidth: 1
//   },
//   nameAndDescription: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "flex-start",
//     alignItems: "flex-start",
//     paddingTop: 5,
//     paddingLeft: 10
//   }
// });

function mapStateToProps(state) {
  return {
    market: state
  };
}

export default connect(mapStateToProps)(AboutItem);
