import { TodoItemProps } from "./todoTypes";

export default function TodoItem(props: TodoItemProps) {
    const { todo, toggleTodo, deleteItem } = props;
    return <li key={todo.id}>
        <label >
            <input type="checkbox" className="checkbox"
                onChange={e => toggleTodo(todo.id, e.target.checked)} checked={todo.completed} />
            {todo.title}
        </label>
        <button className="btn btn-danger" onClick={() => deleteItem(todo.id)} >Delete</button>
    </li>
}