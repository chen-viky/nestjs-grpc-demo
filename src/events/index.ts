import mitt from "mitt";
type EventType = {
  ADD: void;
};
export const emitter = mitt<EventType>();

export * from "./broadcast";
