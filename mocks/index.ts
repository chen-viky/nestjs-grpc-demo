import { createProdMockServer } from "@realibox/vite-plugin-mock/es/createProdMockServer";
import UserMethods from "./api/user"; //引入定义的mock模拟接口
// import StatusMockMethod from './test/status'

export function setupMock() {
  // 这个是用来注册mock的，当在生产中使用mock时，很重要
  createProdMockServer([...UserMethods]);
}
