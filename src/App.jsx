import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "./App.css";

let addStatuses = [
  'empty',
  'editing',
  'saving'
]

let taskStatuses = [
  'empty',
  'editing',
  'saving',
  'saved',
  'done'
]

function App() {
  return (
    <>
      <h1>todo app</h1>
      {addStatuses.map(status => (
      <section key={status}>
        <h3>Add Task {status}</h3>
        <AddTask status={status}/>
      </section>))}
      <TaskList statuses={taskStatuses}/>
    </>
  );
}

export default App;
