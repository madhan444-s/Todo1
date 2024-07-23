import { useState } from "react";
import "./styles.css";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";
import { Todo } from "./todoTypes";

export default function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(title: string) {
    setTodos((cureentTodos) => {
      return [
        ...cureentTodos,
        { id: crypto.randomUUID(), title: title, completed: false }
      ]
    })

  }

  function toggleTodo(id: string, completed: boolean) {
    setTodos((currentTodos) => {
      return currentTodos.map(todo => {
        if (todo.id == id) {
          return { ...todo, completed }
        }
        return todo;
      })
    })
  }

  function deleteItem(id: string) {
    setTodos((currentTodos) => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }


  return <>
    <NewTodoForm onSubmit={addTodo} />
    <h2 className="header">Todo List</h2>
    <TodoList
      todos={todos}
      toggleTodo={toggleTodo}
      deleteItem={deleteItem} />
  </>
}