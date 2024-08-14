import { useToggle } from "@/hooks/index";
function Demo1() {
  const [state, { toggle, setLeft, setRight }] = useToggle();

  return (
    <div>
      <p>Effects：{`${state}`}</p>
      <p>
        <button type="button" onClick={toggle}>
          Toggle
        </button>
        <button type="button" onClick={setLeft} style={{ margin: "0 8px" }}>
          Toggle False
        </button>
        <button type="button" onClick={setRight}>
          Toggle True
        </button>
      </p>

      {/* <Demo11 /> */}
    </div>
  );
}

function Demo11() {
  const [state, { toggle, set, setLeft, setRight }] = useToggle(
    "Hello",
    "World"
  );

  return (
    <div>
      <p>Effects：{state}</p>
      <p>
        <button type="button" onClick={toggle}>
          Toggle
        </button>
        <button
          type="button"
          onClick={() => set("Hello")}
          style={{ margin: "0 8px" }}
        >
          Set Hello
        </button>
        <button type="button" onClick={() => set("World")}>
          Set World
        </button>
        <button type="button" onClick={setLeft} style={{ margin: "0 8px" }}>
          Set Left
        </button>
        <button type="button" onClick={setRight}>
          Set Right
        </button>
      </p>
    </div>
  );
}

export default Demo1;
