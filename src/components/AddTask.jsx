import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [descriptionText, setDescriptionText] = useState("");
  const [status, setStatus] = useState("editing");

  return (
    <div className="addtask-container">
      <label>
        Task Description:
        <textarea
          value={descriptionText}
          onChange={(e) => setDescriptionText(e.target.value)}
          placeholder={
            status === "editing" || status === "saving"
              ? "Enter a task description"
              : ""
          }
          disabled={status === "saving"}
        />
      </label>
      <button
        onClick={() => {
          setDescriptionText("");
          onAddTask(descriptionText);
        }}
        disabled={status === "empty" || status === "saving"}
      >
        Add Task
      </button>
    </div>
  );
}
