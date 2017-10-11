import React from "react";
import { connect } from "react-redux";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import imageForItem from "../helpers/images.js";

class AboutItem extends React.Component {
  clickBuyButton(id) {
    const market = this.props.market.cartItems;
    if (market[id].available > 0) {
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
    const { params } = this.props.navigation.state;
    const itemImage = imageForItem[params.id];
    return (
      <View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Image
            source={itemImage}
            style={{
              flex: 1,
              height: 200,
              resizeMode: "contain"
            }}
          />
        </View>
        <View>
          <Text>
            {params.name}
          </Text>
        </View>
        <Button
          title="add to cart"
          onPress={() => {
            this.clickBuyButton(params.id);
          }}
        />
      </View>
    );
  }
}

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
