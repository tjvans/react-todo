import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Mock from "./components/Mock";
import "./App.css";

let showMock = true;

function App() {
  return (
    <>
      {showMock && <Mock />}
    </>
  );
}

export default App;
