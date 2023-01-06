import { useEffect, useState } from 'react';
import { ITodo } from './interfaces/todos';

export default function Home() {

  const [todos, setTodos] = useState<ITodo[] | []>([]);
  const [loading, setLoading] = useState(false);

  const loadTodos = async () => {
    const res = await fetch("/api/list");
    const todos: ITodo[] = await res.json();
    setTodos(todos);
    setLoading(false);
  };

  const addOneTodo = async () => {
    const todo: ITodo = {
      _id: (todos.length + 1).toString(),
      label: 'Added Todo',
      description: 'The todo was added by clicking the button',
      createdAt: new Date(),
      state: 'todo'
    }
    await fetch("/api/add", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({todo})
    });
    setLoading(true);
    loadTodos();
  }

  useEffect(() => {
    (async () => {
      setLoading(true);
      loadTodos();
    })()
  }, [])

  if (!todos) return "Loading...";
  return (
    <div className={"container column height-100vh width-100"}>
      {
        loading ? <h1>content loading</h1> :
          <div className={"todo-wrapper width-30"}>
            {
              todos.map(todo => {
                return (
                  <div className={"todo"}>
                    <h2>{todo.label}: {todo._id}</h2>
                    <p>{todo.description}</p>
                    <p>{todo.createdAt.toString()}</p>
                    <p>Status: {todo.state}</p>
                  </div>
                )
              })}
          </div>
      }
      <div className={"container row width-30"}>
        <button onClick={addOneTodo}>Ajouter une todo</button>
      </div>
    </div>
  )
}
