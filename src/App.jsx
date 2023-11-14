import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Mock from "./storybook/Mock";
import "./css/App.css";

let showMock = false;

const initialTask = [
  {
    id: 0,
    description: "This is an example of a task.",
    done: false,
  },
];

let nextId = initialTask.length;

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

  function handleChangeTask(selectedTask) {
    setTasks(
      tasks.map((oldTask) => {
        if (oldTask.id === selectedTask.id) {
          return selectedTask;
        } else {
          return oldTask;
        }
      })
    )
  }

  function handleDeleteTask(selectedTask) {
    setTasks(tasks.filter((oldTask) => oldTask.id !== selectedTask))
  }

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
