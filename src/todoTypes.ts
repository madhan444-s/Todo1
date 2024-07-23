interface Todo {
    id: string;
    title: string;
    completed: boolean
}


interface TodoListProps {
    todos: Todo[]
    toggleTodo: (id: string, completed: boolean) => void;
    deleteItem: (id: string) => void;
}

interface TodoItemProps {
    todo: Todo;
    toggleTodo: (id: string, completed: boolean) => void;
    deleteItem: (id: string) => void;
}

export type {
    Todo,
    TodoListProps,
    TodoItemProps
}