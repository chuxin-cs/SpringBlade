import { useRef } from "react";

interface IProps {
  type: number;
}
function MyComponentChildren(props: IProps) {
  console.log("MyComponentChildren", props.type);
  return (
    <>
      <h2>MyComponentChildren {props.type}</h2>
    </>
  );
}
export function MyComponent() {
  let count = 0;
  const handler = () => {
    count += 1;
    console.log(count);
  };

  console.log(" MyComponent mounted~");

  return (
    <>
      <MyComponentChildren type={1} />
      <button onClick={handler}>Increment</button>
    </>
  );
}

export function MyUseRefComponent() {
  const countRef = useRef(0);

  console.log(" MyUseRefComponent mounted~");

  const handler = () => {
    countRef.current += 1;
    console.log(countRef.current);
  };
  return (
    <>
      <MyComponentChildren type={2} />
      <button onClick={handler}>Increment</button>
    </>
  );
}
