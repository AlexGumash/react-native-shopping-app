import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Provider } from "react-redux";
import { TabNavigator } from "react-navigation";
import { StackNavigator } from "react-navigation";
import store from "./src/reducers/index.js";

import Market from "./src/containers/Market.js";
import Cart from "./src/containers/Cart.js";
import AboutItem from "./src/components/About-item.js";

const iconStyle = {
  width: 40,
  height: 40,
  resizeMode: "contain"
};

class ItemsInCartList extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return (
        <Image
          source={require("./src/static/images/cart-2.png")}
          style={[
            iconStyle,
            {
              tintColor: tintColor
            }
          ]}
        />
      );
    }
  };

  render() {
    return (
      <View>
        <Text>Loch</Text>
        <Cart />
      </View>
    );
  }
}

const Gavno = StackNavigator({
  Home: {
    screen: Market,
    navigationOptions: {
      title: "Market"
    }
  },
  NotHome: {
    screen: AboutItem,
    navigationOptions: {
      title: "About item"
    }
  }
});

const App = TabNavigator(
  {
    Market: {
      screen: Gavno,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return (
            <Image
              source={require("./src/static/images/search-512-2.png")}
              style={[
                iconStyle,
                {
                  tintColor: tintColor
                }
              ]}
            />
          );
        }
      }
    },
    ItemsInCart: { screen: ItemsInCartList }
  },
  {
    tabBarPosition: "bottom",
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      tabStyle: { height: 50 },
      iconStyle: { height: 40, width: 40 },
      style: { backgroundColor: "white" },
      pressColor: "rgb(198, 198, 198)",
      indicatorStyle: { height: 0 },
      activeTintColor: "rgb(32, 32, 32)",
      inactiveTintColor: "rgb(181, 181, 181)"
    }
  }
);

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
