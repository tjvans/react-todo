import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [descriptionText, setDescriptionText] = useState("");
  const [status, setStatus] = useState("empty");

  function handleChange (e) {
    setDescriptionText(e.target.value)
    !e.target.value ? setStatus("empty") : setStatus("editing")
  }

  function handleClick() {
    setDescriptionText("");
    onAddTask(descriptionText);
  }

  return (
    <div className="addtask-container">
      <label>
        Task Description:
        <textarea
          value={descriptionText}
          onChange={handleChange}
          placeholder={"Enter a task description"}
          disabled={status === "saving"}
        />
      </label>
      <button
        onClick={handleClick}
        disabled={status === "empty" || status === "saving"}>
        Add Task
      </button>
    </div>
  );
}