import { useReducer } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Mock from "./storybook/Mock";
import { initialState, taskReducer } from "./reducer/taskReducer";
import "./css/App.css";

let showMock = true;

let nextId = initialState.length;

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialState);

  function handleAddTask(taskDescription) {
    dispatch({
      type: "added",
      id: nextId++,
      text: taskDescription,
    });
  }

  function handleChangeTask(selectedTask) {
    dispatch({
      type: "changed",
      selectedTask: selectedTask,
    });
  }

  function handleDeleteTask(selectedTask) {
    dispatch({
      type: "deleted",
      id: selectedTask,
    });
  }

  return (
    <div className="app-container">
      {showMock && <Mock />}
      {!showMock && (
        <>
          <AddTask onAddTask={handleAddTask} />
          <TaskList
            tasks={tasks}
            onChangeTask={handleChangeTask}
            onDeleteTask={handleDeleteTask}
          />
        </>
      )}
    </div>
  );
}

export default App;
