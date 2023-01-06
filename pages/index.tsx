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
                    <h2>{todo.label}</h2>
                    <p>{todo.description}</p>
                    <p>{todo.createdAt.toString()}</p>
                    <p>Status: {todo.state}</p>
                  </div>
                )
              })}
          </div>
      }
      <div className={"container row width-30"}>
        <button>Ajouter une todo</button>
      </div>
    </div>
  )
}
