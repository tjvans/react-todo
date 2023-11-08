import "../App.css";

let addStatuses = ["empty", "editing", "saving"];

let taskStatuses = ["saved", "editing", "empty", "saving", "done"];

export default function Mock() {
    return (
        <>
            <h1>todo app</h1>
            {addStatuses.map((status) => (
                <section key={status}>
                <h3>Add Task ({status})</h3>
                <AddTask status={status} />
                </section>
            ))}
            <hr className="divider" style={{borderTop: "3px dashed #bbb"}}/>
            <TaskList statuses={taskStatuses} />
        </>
    )
}

function AddTask({ status }) {
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

function TaskList({ statuses }) {
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

function Task({ status }) {
    if (status === "saved" || status === "done") {
        return (
        <div className="task-container">
            <p>Description of task</p>
            <label>
            Done
            <input type="checkbox" checked={status === "saved" ? false : true} />
            </label>
            <button>Remove Task</button>
        </div>
        );
    }
    return (
        <div className="task-container">
        <textarea disabled={status === "saving"} />
        <button disabled={status === "empty" || status === "saving"}>Save</button>
        </div>
    );
}