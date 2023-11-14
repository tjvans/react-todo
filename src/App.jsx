import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Mock from "./storybook/Mock";
import "./css/App.css";

let showMock = false;

let nextId = 0;
const initialTask = [
  {
    id: 0,
    description: "This is an example of a task.",
    done: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(initialTask);

  function handleAddTask(taskDescription) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        description: taskDescription,
        done: false,
      },
    ]);
  }

  function handleChangeTask(task) {}

  function handleDeleteTask(taskId) {}

  return (
    <div className="app-container">
      {showMock && <Mock />}
      {!showMock && (
        <>
          <AddTask onAddTask={handleAddTask} />
          <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
        </>
      )}
    </div>
  );
}

export default App;
