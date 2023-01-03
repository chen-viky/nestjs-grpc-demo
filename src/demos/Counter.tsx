import { observer } from "mobx-react-lite";
import { broadcastChannel, emitter } from "../events";
import { useStore } from "../mobx-store";
import { useAppDispatch, useAppSelector, useCounter } from "../redux-store";
// import { useCounter } from "../redux-store";
import { add, minus, fetchCount } from "../redux-store/reducer/counter";

const MobxCount = observer(() => {
  const counter = useStore("counter");
  // const { count, increase, reset } = counter;
  return (
    <div>
      MobxCount : {counter.count}
      <br />
      <button onClick={() => counter.increase()}>increase</button>{" "}
      <button onClick={() => counter.reset()}>reset</button>
    </div>
  );
});
const ReduxCount = () => {
  const { count } = useCounter();
  const dispatch = useAppDispatch();
  return (
    <div>
      ReduxCount : {count}
      <br />
      <button onClick={() => dispatch(add(6))}>add</button>{" "}
      <button onClick={() => dispatch(minus())}>minus</button>
      <button onClick={() => dispatch(fetchCount())}>fetchCount</button>
      <button
        onClick={() => {
          emitter.emit("ADD");
        }}
      >
        event ADD
      </button>
    </div>
  );
};

const Counter = () => {
  return (
    <>
      <MobxCount />
      <ReduxCount />
    </>
  );
};

export default Counter;
