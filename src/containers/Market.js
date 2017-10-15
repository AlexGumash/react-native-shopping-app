import React from "react";
import { connect } from "react-redux";
import { View, Button, ActivityIndicator } from "react-native";
import { fetchCars } from "../actions.js";

import MarketProduct from "../components/Market-item.js";

class Market extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
    this.props.dispatch(fetchCars(this.props.dispatch));
  }
  render() {
    const items = this.props.db.data;

    if (this.props.db.fetching) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" color="black" />
        </View>
      );
    } else {
      return (
        <View>
          {Object.keys(this.props.db.data).map((object, index) => {
            return (
              <View key={index}>
                <MarketProduct
                  id={items[object].id}
                  name={items[object].name}
                  price={items[object].price}
                  available={items[object].available}
                  description={items[object].description}
                  navigation={this.props.navigation}
                />
              </View>
            );
          })}
        </View>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    db: state.dbReducer
  };
}

export default connect(mapStateToProps)(Market);
