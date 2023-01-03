import { makeAutoObservable, runInAction } from "mobx";
import { request } from "../../services";

class User {
  name = "defaultName";

  constructor() {
    makeAutoObservable(this);
  }

  async login() {
    const res = await request({
      url: "/login",
    });
    runInAction(() => {
      this.name = res.data.name;
    });
  }
}

export default User;
