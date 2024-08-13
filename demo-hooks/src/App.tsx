import { useTitle } from "ahooks";
import { useTitle as useTitle1 } from "@/hooks";

function App() {
  useTitle("App.ts");
  useTitle1("App.js");

  return (
    <>
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
