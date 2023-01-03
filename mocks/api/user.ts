import { MockMethod } from "@realibox/vite-plugin-mock";
import { Random } from "mockjs";

const UserMethods: MockMethod[] = [
  {
    url: `/login`, // 注意，这里只能是string格式
    method: "get",
    handle() {
      return {
        data: {
          name: Random.cname(),
        },
        statusCode: 200,
      };
    },
  },
];
export default UserMethods; // 这里其实就是定义数据格式的，不了解的同学可以参考typescript的官方文档
