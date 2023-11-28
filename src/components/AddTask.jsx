import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [status, setStatus] = useState("empty");
  const [descriptionText, setDescriptionText] = useState("");

  function handleChange(e) {
    setDescriptionText(e.target.value);
    e.target.value ? setStatus("editing") : setStatus("empty");
  }

  function handleClick() {
    setStatus("saving");
    onAddTask(descriptionText);
    setDescriptionText("");
    setStatus("empty");
  }

  return (
    <div className="addtask-container">
      {status !== "saving" && (
        <>
          <label>
            Task Description:
            <textarea
              id="taskDescription"
              value={descriptionText}
              onChange={handleChange}
              placeholder={"Enter a task description"}
              disabled={status === "saving"}
            />
          </label>
          <button
            onClick={handleClick}
            disabled={status === "empty" || status === "saving"}
          >
            Add Task
          </button>
        </>
      )}
      {status === "saving" && <div id="saving">Saving</div>}
    </div>
  );
}
