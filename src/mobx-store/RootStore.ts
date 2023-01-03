import { Counter } from "./Counter";
import User from "./models/User";

export default class RootStore {
  counter = new Counter();
  user = new User();
}
