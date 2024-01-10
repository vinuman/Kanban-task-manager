import { useState } from "react";
import { SideBarContext } from "./contexts/SidebarContext";
import { BoardContext } from "./contexts/BoardContext";
import Layout from "./Layout";
import data from "./data.json";
import TaskContent from "./TaskContent";

function App() {
  const [board, setBoard] = useState(data.boards);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sideBar, setSideBar] = useState(true);
  console.log(board);

  return (
    <>
      <div className="App font-jakarta">
        <BoardContext.Provider
          value={{ board, setBoard, selectedIndex, setSelectedIndex }}
        >
          <SideBarContext.Provider value={{ sideBar, setSideBar, board }}>
            <Layout>
              <TaskContent />
            </Layout>
          </SideBarContext.Provider>
        </BoardContext.Provider>
      </div>
    </>
  );
}

export default App;
