import * as z from "zod/v4";


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

const TodoScheme = z.object({
    id: z.number(),
    text: z.string(),
    completed: z.boolean()
});

const TaskStateScheme = z.object({
    length: z.number(),
    todos: z.array(TodoScheme),
    completed: z.number(),
    pending: z.number()
})


export const getTasksInitialState = (): TaskState => {
    const localStorageState = localStorage.getItem("tasks-state");
    if (!localStorageState)
        return {
            todos: [],
            length: 0,
            completed: 0,
            pending: 0
        }
    const result = TaskStateScheme.safeParse(JSON.parse(localStorageState));

    if (result.error) {
        console.log(result.error);
        return {
            todos: [],
            length: 0,
            completed: 0,
            pending: 0
        }
    }

    return result.data;
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
