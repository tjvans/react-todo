import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Mock from "./storybook/Mock";
import "./css/App.css";

let showMock = true;

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
  const [selectedTask, setSelectedTask] = useState(0);
  const taskDescription = tasks.description;

  function handleAddTask(taskDescription) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        description: taskDescription,
      },
    ]);
  }

  return (
    <div className="app-container">
      {showMock && <Mock />}
      {!showMock && (
        <>
          <AddTask
            taskDescription={taskDescription}
            onAddTask={handleAddTask}
          />
          <TaskList
            tasks={tasks}
            onChangeDescription={setTasks}
            isSelected={selectedTask}
            onChangeSelected={setSelectedTask}
          />
        </>
      )}
    </div>
  );
}

export default App;
