import { makeAutoObservable, runInAction } from "mobx";
import { emitter } from "../events";

export class Counter {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase() {
    this.count += 1;
  }

  reset() {
    this.count = 0;
  }
}

export const counter = new Counter();
