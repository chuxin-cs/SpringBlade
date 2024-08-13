import { useState } from "react";
import { MyComponent, MyUseRefComponent } from "../MyComponent";

function Demo() {
  const [count, setCount] = useState(0);
  const handler = () => {
    setCount((state) => (state += 1));
  };

  console.log("demo mounted");
  return (
    <>
      <h2>{count}</h2>
      <button onClick={handler}>count + 1</button>
      <MyComponent />
      <MyUseRefComponent />
    </>
  );
}

export default Demo;
