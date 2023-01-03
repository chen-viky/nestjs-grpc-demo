import mitt from "mitt";

export const broadcastChannel = new BroadcastChannel("localhost");
export type BroadcastEventType = {
  [BroadcastCommand.LOGOUT]: void;
  [BroadcastCommand.SWITCH_COMPANY]: {
    companyId: string;
  };
};
export enum BroadcastCommand {
  LOGOUT = "logout",
  SWITCH_COMPANY = "switch-company",
}

export type BroadcastMessageData = {
  cmd: BroadcastCommand;
  data: any;
  __REALIBOX__: boolean;
};
export const broadcastEvent = mitt<BroadcastEventType>();

broadcastChannel.addEventListener("message", (e) => {
  const { data: msgData } = e;
  if (msgData.__REALIBOX__) {
    const { cmd, data } = msgData as BroadcastMessageData;
    console.log(`cmd : ${cmd} data: `, data);

    broadcastEvent.emit(cmd, data);
  }
});

export const sendBroadcastMessage = (cmd: BroadcastCommand, data?: any) => {
  broadcastChannel.postMessage(
    Object.assign({
      cmd,
      data,
      __REALIBOX__: true,
    })
  );
};
