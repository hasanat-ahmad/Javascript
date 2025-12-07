function AddTodo() {
  return (
    <div className="add-todo">
      <div className="add-todo-row">
        <input className="todo-input" type="text" placeholder="Enter todo here" />
        <input type="date" />
        <button type="button" className="btn btn-primary btn-primary-custom">
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
