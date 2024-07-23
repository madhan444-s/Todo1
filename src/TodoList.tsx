import TodoItem from "./TodoItem"
import { Todo, TodoListProps } from "./todoTypes";

export default function TodoList(props: TodoListProps) {
    const { todos, toggleTodo, deleteItem } = props;
    return <ul className="list">
        {todos.length == 0 && "No Todos"}
        {todos.map((todo: Todo) => {
            return (
                <TodoItem todo={todo}
                    key={todo.id}
                    toggleTodo={toggleTodo}
                    deleteItem={deleteItem}
                />
            )
        })
        }
    </ul >
}