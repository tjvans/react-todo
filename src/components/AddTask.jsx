import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [descriptionText, setDescriptionText] = useState("");
  const [inputStatus, setInputStatus] = useState("empty");
  const delay = ms => new Promise(res => setTimeout(res, ms))

  function handleChange(e) {
    setDescriptionText(e.target.value);
    e.target.value ? setInputStatus("editing") : setInputStatus("empty");
  }

  const handleClick = async () => {
    setInputStatus("saving");
    onAddTask(descriptionText);
    // simulate task upload
    await delay(2000);
    console.log("Task added")
    setDescriptionText("");
    setInputStatus("empty");
  }

  return (
    <div className="addtask-container">
      {inputStatus !== "saving" && <>
        <label>
          Task Description:
          <textarea
            id="taskDescription"
            value={descriptionText}
            onChange={handleChange}
            placeholder={"Enter a task description"}
            disabled={inputStatus === "saving"}
          />
        </label>
        <button
          onClick={handleClick}
          disabled={inputStatus === "empty" || inputStatus === "saving"}
        >
          Add Task
        </button> 
      </>}
      {inputStatus === "saving" && <div id="saving">Saving</div>}
    </div>
  );
}
