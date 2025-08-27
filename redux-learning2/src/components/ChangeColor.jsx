import { useState } from "react";
import { useDispatch } from "react-redux";
import { Change } from "../features/Theme";
const ChangeColor = () => {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input type="text" onChange={(event) => setColor(event.target.value)} />
      <button
        onClick={() => {
          dispatch(Change(color));
        }}
      >
        ChangeColor
      </button>
    </div>
  );
};

export default ChangeColor;
