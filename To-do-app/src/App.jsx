import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";

function App() {
  return (
    <div className="app-root">
      <div className="todo-card">
        <AppName />
        <AddTodo />
        <div className="todo-list">
          <TodoItem1 />
          <TodoItem2 />
        </div>
      </div>
    </div>
  );
}

export default App;
