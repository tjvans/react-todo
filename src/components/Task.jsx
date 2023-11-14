import { useState } from "react";

export default function Task({ task, onChange, onDelete }) {
  const [taskStatus, setTaskStatus] = useState("saved")
  const delay = ms => new Promise(res => setTimeout(res, ms))
  let taskContent;
  console.log(taskStatus)

  if (taskStatus === "editing") {
    taskContent = (
      <>
        <textarea 
          value={task.description}
          onChange={(e) => {
            onChange({
              ...task,
              description: e.target.value
            })
          }}
          disabled={taskStatus === "saving"} 
        />
        <button 
          onClick={() => setTaskStatus("saved")}
          disabled={taskStatus === "empty" || taskStatus === "saving"}>
            Save
        </button>
      </>
    )
  } else {
    taskContent = (
      <>
      {task.description}
      <button onClick={() => setTaskStatus("editing")}>Edit Task</button>
    </>
    )
  }
  return (
    <div className="task-container">
      <label>
          Done
          <input type="checkbox" 
            checked={task.done}
            onChange={(e) => {
              onChange({
                ...task,
                done: e.target.checked,
              })
            }}
          />
        </label>
        {taskContent}
        <button onClick={() => onDelete(task.id)}>Remove Task</button>
    </div>
  );
}