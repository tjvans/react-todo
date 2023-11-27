import "../css/Mock.css";

const addStatus = ["empty", "editing", "saving"];
const calendarStatus = ["currentDate", "selectDate"];
const taskStatus = ["saved", "editing", "empty", "saving", "done"];

export default function Mock() {
  return (
    <>
      <h1>todo app</h1>
      {calendarStatus.map((status) => (
        <section key={status}>
          <h3>Calendar ({status})</h3>
          <Calendar status={status} />
        </section>
      ))}
      <hr className="divider" style={{ borderTop: "3px dashed #bbb" }} />
      {addStatus.map((status) => (
        <section key={status}>
          <h3>Add Task ({status})</h3>
          <AddTask status={status} />
        </section>
      ))}
      <hr className="divider" style={{ borderTop: "3px dashed #bbb" }} />
      <TaskList status={taskStatus} />
    </>
  );
}

function Calendar({ status }) {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const month = [];
  for (let i = 1; i <= 31; i++) {
    month[i] = (
      <td key={i}>
        <button>{i}</button>
      </td>
    );
  }
  if (status === "selectDate") {
    return (
      <div className="calendar-container">
        <div className="month-year-selector">
          <button>Prev Year</button>
          <button>Prev Month</button>
          <button>Select Month/Year</button>
          <button>Next Month</button>
          <button>Next Year</button>
        </div>
        <div className="days-table">
          <table>
            <thead>
              <tr>
                {weekdays.map((weekday) => (
                  <td key={weekday}>{weekday}</td>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>{month.slice(0, 8).map((day) => day)}</tr>
              <tr>{month.slice(8, 15).map((day) => day)}</tr>
              <tr>{month.slice(15, 22).map((day) => day)}</tr>
              <tr>{month.slice(22, 29).map((day) => day)}</tr>
              <tr>{month.slice(29, 32).map((day) => day)}</tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  return (
    <div className="calendar-container">
      <div className="month-year-selector">
        <button>Prev Day</button>
        <button>
          <h1>Current Date / Select Date</h1>
        </button>
        <button>Next Day</button>
      </div>
    </div>
  );
}

function AddTask({ status }) {
  if (status === "editing" || status === "empty" || status === "saving") {
    return (
      <div className="addtask-container">
        <label>
          Task Description:
          <textarea
            value={
              status === "editing" || status === "saving"
                ? "A task description"
                : ""
            }
            disabled={status === "saving"}
            readOnly={true}
          />
        </label>
        <button disabled={status === "empty" || status === "saving"}>
          Add Task
        </button>
      </div>
    );
  }
}

function TaskList({ status }) {
  return (
    <>
      {status.map((status) => (
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
        <label>
          Done
          <input
            type="checkbox"
            checked={status === "saved" ? false : true}
            readOnly={true}
          />
        </label>
        <p>A task description</p>
        {status === "saved" && <button>Edit Task</button>}
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
