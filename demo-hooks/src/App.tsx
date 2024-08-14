import { useTitle } from "ahooks";

// hooks
import { useTitle as useTitle1 } from "@/hooks";
// pages
import Demo from "./pages/Demo";
import Demo1 from "./pages/Demo1";

function App() {
  useTitle("App.ts");
  // useTitle1();

  return (
    <>
      <h1>Vite + React</h1>
      {/* <Demo /> */}
      <Demo1 />
    </>
  );
}

export default App;
