import { useState } from "react";

function App() {
  const [count] = useState(0);

  return (
    <>
      <h1>学习react~</h1>
      {count}
    </>
  );
}

export default App;
