import React from "react";
import { connect } from "react-redux";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import imageForItem from "../helpers/images.js";

class AboutItem extends React.Component {
  clickBuyButton(id) {
    const database = this.props.db.data;
    const { dispatch } = this.props;
    if (database[id].available > 0) {
      dispatch({
        type: "ADD_TO_CART",
        id: id
      });

      dispatch({
        type: "FIND_TOTAL",
        data: this.props.market
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

function mapStateToProps(state) {
  return {
    market: state.cartItems,
    db: state.dbReducer
  };
}

export default connect(mapStateToProps)(AboutItem);
