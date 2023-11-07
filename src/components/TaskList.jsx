import Task from "./Task";

export default function TaskList({ statuses }) {
  return (
    <>
      {statuses.map((status) => (
        <section key={status}>
          <h3>Task ({status}):</h3>
          <Task status={status} />
        </section>
      ))}
    </>
  );
}
