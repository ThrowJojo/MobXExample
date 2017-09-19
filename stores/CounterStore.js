// @flow

import { observable, action } from "mobx";

export default class CounterStore {
  @observable count = 0;

  @action increase() {
    this.count += 1;
  }

  @action decrease() {
    this.count -= 1;
  }
}
