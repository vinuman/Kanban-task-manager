import { useState } from "react";
import Layout from "./Layout";
import data from "./data.json";

function App() {
  const [board, setBoard] = useState(data.boards);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sideBar, setSideBar] = useState(false);
  console.log(board);
  return (
    <>
      <div className="App font-jakarta">
        <Layout sideBar={sideBar} selectedIndex={selectedIndex} board={board}>
          <h1 className={`  ${sideBar ? "ml-[320px]" : "ml-20px"}`}>hello</h1>
        </Layout>
      </div>
    </>
  );
}

export default App;
