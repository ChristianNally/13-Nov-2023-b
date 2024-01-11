/*
props
  * id [number]
  * task [string] - the task to be completed
  * isComplete [boolean] - whether the task is completed
  * category [string] - the category the task belongs to
*/

import '../styles/TodoListItem.css';

// const props = {
//   id: 500,
//   task: 'walk the cat',
//   isComplete: true,
//   category: 'to do'
// };

const TodoListItem = (props) => {
  return (
    <div className="TodoListItem">
      <div>
        <h2>{props.task} ({props.id})</h2>
        <h2>{props.isComplete ? '✅' : '🟩'}</h2>
      </div>
      <h3>Category: {props.category}</h3>
    </div>
  );
};

export default TodoListItem;
