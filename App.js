// @flow

import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import CounterStore from "./stores/CounterStore";
import Counter from "./components/Counter";
import { Provider, inject } from "mobx-react";

const counterStore = new CounterStore();

export default class App extends Component {
  render() {
    return (
      <Provider counterStore={counterStore}>
        <Content />
      </Provider>
    );
  }
}

@inject("counterStore")
class Content extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Counter />
        <Button
          title="Increase"
          onPress={() => this.props.counterStore.increase()}
        />
        <Button
          title="Decrease"
          onPress={() => this.props.counterStore.decrease()}
        />
      </View>
    );
  }
}

let Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  }
});
