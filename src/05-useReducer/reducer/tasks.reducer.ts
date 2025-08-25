
export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskState {
    todos: Todo[];
    length: number;
    completed: number;
    pending: number;

}

export type TaskAction =
    | { type: "ADD_TODO", payload: string }
    | { type: "TOGGLE_TODO", payload: number }
    | { type: "DELETE_TODO", payload: number }

export const getTasksInitialState = (): TaskState => {
    const localStorageState = localStorage.getItem("tasks-state");
    if (!localStorageState)
        return {
            todos: [],
            length: 0,
            completed: 0,
            pending: 0
        }
    return JSON.parse(localStorageState);
}

export const taskReducer = (
    state: TaskState,
    action: TaskAction
): TaskState => {

    switch (action.type) {

        case 'ADD_TODO': {
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false
            };

            return {
                // spread pone las propiedades actuales del estado y luego se agregan las que si cambian
                ...state,
                todos: [...state.todos, newTodo],
                length: state.todos.length + 1,
                pending: state.pending + 1
            };
        }

        case "DELETE_TODO": {
            const updatedTodos = state.todos.filter(todo => todo.id !== action.payload);
            const completed = updatedTodos.filter(todo => todo.completed).length;
            const pending = updatedTodos.length - completed;


            return {
                ...state,
                todos: updatedTodos,
                length: updatedTodos.length,
                completed,
                pending

            };
        }

        case "TOGGLE_TODO": {
            const updatedTodos = state.todos.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo;
            });

            const completed = updatedTodos.filter(todo => todo.completed).length;
            const pending = updatedTodos.length - completed;

            return {
                ...state,
                todos: updatedTodos,
                completed,
                pending
            };
        }

        default: return state;
    }

}
