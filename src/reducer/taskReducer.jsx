export const initialState = [
    {
        id: 0,
        description: "This is an example of a task.",
        done: false,
    },
];

export function taskReducer (tasks, action) {
    switch (action.type) {
        case 'added': {
            return [
                ...tasks,
                {
                    id: action.id,
                    description: action.description,
                    done: false,
                },
            ]
        }
        case 'changed': {
            return tasks.map((oldTask) => {
                if (oldTask.id === action.selectedTask.id) {
                  return action.selectedTask;
                } else {
                  return oldTask;
                }
              })
        }
        case 'deleted': {
            return tasks.filter((oldTask) => oldTask.id !== action.id)
        }
        default: {
            throw Error('Unknown action: ' + action.type)
        }
    }
}


