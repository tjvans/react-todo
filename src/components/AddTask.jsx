export default function AddTask({ status }) {
  if (status === "editing" || status === "empty" || status === "saving") {
    return (
      <div className="addtask-container">
        <label>
          Task Description:
          <input
            type="textarea"
            value={status === "editing" || status === 
            "saving" ? "A task description" : ""}
            disabled={status === "saving"}
          />
        </label>
        <button disabled={status === "empty" || status === "saving"}>
          Add Task
        </button>
      </div>
    );
  }
}
