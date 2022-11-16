import { useState } from "react";
import "./assets/styles/App.css";
import { Content } from "./components/Content";
import { Menu } from "./components/Menu";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="App">
      <Menu setPage={setPage} />
      <Content page={page} />
    </div>
  );
}

export default App;
