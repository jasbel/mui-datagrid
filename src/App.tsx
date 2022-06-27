import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { DataGridComponent } from "./components/DataGrid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <DataGridComponent />
    </div>
  );
}

export default App;
