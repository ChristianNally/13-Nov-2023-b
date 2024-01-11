import TodoListItem from "./TodoListItem";

const props = {
  todos: []
};

const TodoList = () => {

  const mappedTodos = props.todos.map((todo) => {
    return (
      <TodoListItem
        key={todo.id}
        id={todo.id}
        task={todo.task}
        isComplete={todo.isComplete}
        category={todo.category}
      />
    );
  });

  return (
    <div>
      <h2>TodoList Component</h2>

      { !props.todos.length && <h2>Spinner...</h2> }
      { !!props.todos.length && mappedTodos }
    </div>
  );
};

export default TodoList;
