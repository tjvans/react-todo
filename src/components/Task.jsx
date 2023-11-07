export default function Task({status}) {
  if (status === 'saved' || status === 'done') {
    return (
        <div className="task-container">
            <h2>A task</h2>
            <p>Description of task</p>
            <label>
                Done
                <input type="checkbox" checked={
                    status === 'saved' ? false : true
                    } />
            </label>
            <button>Remove Task</button>
        </div>
    )
  } 
    return (
        <div className="task-container">
            <h2>A task</h2>
            <textarea disabled={
                status === 'saving'
            }/>
            <button disabled={
                status === 'empty' ||
                status === 'saving'
            }>Save</button>
        </div>
    )
}
