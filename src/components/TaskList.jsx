import Task from "./Task";

let statuses = [
  'empty',
  'editing',
  'saving',
  'saved',
  'done'
]

export default function TaskList() {
  return (
    <>
      {statuses.map(status => (
        <section key={status}>
          <h3>Task ({status}):</h3>
          <Task status={status}/>
        </section>
      ))}
    </>
  )
}
