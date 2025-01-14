import { useState } from 'react'
import './App.css';

function App() {
  const [todo, setTodo] = useState([
    {
      id:1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },{
      id:2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },{
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);
  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
      {todo.map((todo) => (
        <div className="todo">
          <div className="content">
            <p>{todo.text}</p>
            <p className="category">
              ({todo.category})
            </p>
          </div>
          <div>
            <button>Completar</button>
            <button>X</button>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default App
