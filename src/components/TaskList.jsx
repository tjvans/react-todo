import Task from "./Task";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  const descendingTasks = tasks
    .slice(0)
    .reverse()
    .map((element) => {
      return element;
    });
  return (
    <ul>
      {descendingTasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}
