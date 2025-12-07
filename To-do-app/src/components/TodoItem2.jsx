function TodoItem2() {
  let todoName = "Going to college";
  let todoDate = "10/10/2004";

  return (
    <div className="todo-item">
      <div className="name">{todoName}</div>
      <div className="date">{todoDate}</div>
      <div className="actions">
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
}
export default TodoItem2;
