import { useState } from "react";

export default function Task({ task, onChange, onDelete }) {
  const [status, setStatus] = useState("saved");
  let taskContent;

  if (status === "editing") {
    taskContent = (
      <>
        <textarea
          value={task.description}
          onChange={(e) => {
            onChange({
              ...task,
              description: e.target.value,
            });
          }}
        />
        <button
          onClick={() => setStatus("saved")}
          disabled={status === "empty"}
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.description}
        <button onClick={() => setStatus("editing")}>Edit Task</button>
      </>
    );
  }
  return (
    <div className="task-container">
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>Remove Task</button>
    </div>
  );
}
