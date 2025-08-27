import { useDispatch } from "react-redux";
import { login } from "../features/User";
const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: "Ruth", age: 20, email: "ruth@gmail.com" }));
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
