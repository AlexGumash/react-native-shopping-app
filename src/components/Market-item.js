import React from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableHighlight
} from "react-native";
import imageForItem from "../helpers/images.js";

class Product extends React.Component {
  render() {
    const itemImage = imageForItem[this.props.id];
    return (
      <TouchableHighlight
        onPress={() =>
          this.props.navigation.navigate("NotHome", {
            name: this.props.name,
            id: this.props.id,
            available: this.props.available
          })}>
        <View style={styles.marketItem}>
          <View
            className="image-name-description"
            style={{ display: "flex", flexDirection: "row" }}>
            <Image
              source={itemImage}
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain"
              }}
            />
            <View
              className="name-and-description"
              style={styles.nameAndDescription}>
              <View
                className="name-and-description__name"
                style={{ paddingBottom: 3 }}>
                <Text>
                  {this.props.name}
                </Text>
              </View>
              <View className="name-and-description__description">
                <Text>
                  {this.props.description}
                </Text>
              </View>
            </View>
          </View>
          <View className="price" style={{ paddingTop: 5, paddingRight: 10 }}>
            <Text>
              &#36;{this.props.price}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  marketItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1
  },
  nameAndDescription: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 5,
    paddingLeft: 10
  }
});

function mapStateToProps(state) {
  return {
    market: state,
    db: state.dbReducer
  };
}

export default connect(mapStateToProps)(Product);
