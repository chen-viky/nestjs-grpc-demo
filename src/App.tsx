import Async from "./demos/Async";
import Counter from "./demos/Counter";
import { BroadcastCommand, sendBroadcastMessage } from "./events";
import Logo from "./assets/logo.png";
const sendNotification = () => {
  const notification = new Notification("您有一条新的来电", {
    body: "派大星在项目AAA中提及了你拉",
    icon: Logo,
  });
  notification.onerror = (e) => {
    console.log("onerror e", e);
  };
};
function App() {
  return (
    <div className="App">
      <Counter />
      <Async />
      <button
        onClick={() => {
          sendBroadcastMessage(BroadcastCommand.SWITCH_COMPANY, {
            companyId: Date.now().toString(),
          });
        }}
      >
        {BroadcastCommand.SWITCH_COMPANY}
      </button>
      <button
        onClick={() => {
          sendBroadcastMessage(BroadcastCommand.LOGOUT);
        }}
      >
        {BroadcastCommand.LOGOUT}
      </button>
      <button
        onClick={() => {
          console.log("sendNotification", Notification.permission);

          if (Notification.permission === "default") {
            Notification.requestPermission((permission) => {
              if (permission === "granted") {
                sendNotification();
              }
            });
          } else if (Notification.permission === "granted") {
            sendNotification();
          }
        }}
      >
        notification
      </button>
    </div>
  );
}

export default App;
