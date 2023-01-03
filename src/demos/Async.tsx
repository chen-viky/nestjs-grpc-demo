import { observer } from "mobx-react-lite";
import { useStore } from "../mobx-store";
import { useAppDispatch, useUser } from "../redux-store";
import { login } from "../redux-store/reducer/user";

const MobxAsync = observer(() => {
  const user = useStore("user");
  return (
    <div>
      MobxAsync
      <br />
      username: {user.name}
      <button
        onClick={() => {
          user.login();
        }}
      >
        Login
      </button>
    </div>
  );
});

const ReduxAsync = () => {
  const { name } = useUser();
  const dispatch = useAppDispatch();
  return (
    <div>
      ReduxAsync
      <br />
      username: {name}
      <button
        onClick={() => {
          dispatch(login());
        }}
      >
        Login
      </button>
    </div>
  );
};

const Async = () => {
  return (
    <>
      <MobxAsync />
      <ReduxAsync />
    </>
  );
};

export default Async;
