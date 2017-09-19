// @flow

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { observer, inject } from "mobx-react";

@inject("counterStore")
@observer
export default class Counter extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text>Current Count: {this.props.counterStore.count}</Text>
      </View>
    );
  }
}

let Styles = StyleSheet.create({
  container: {
    padding: 15
  }
});
