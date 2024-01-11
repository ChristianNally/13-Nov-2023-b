# W07D04 - React Developer Workflow

### To Do
* [x] Node Version and NVM
* [x] CRA Alternatives
* [x] Project Structure
* [x] Data Structure
* [x] Component Selection
* [x] Building Components in Isolation
  * [x] Styling with hardcoded values
  * [x] Passing props
  * [x] Conditional rendering
* [x] React DevTools

### Repo Considerations
* 1 repo or 2??

### Project Structure
* src
  * components
    * Header.jsx
  * styles
    * Header.css

### Data Structure

```js
const todo = {
  id: 1,
  task: 'buy groceries',
  isComplete: false,
  category: 'to buy'
};

const todos = [];
```

### Component Selection

* App - state: todos
  * Header - props: todos
  * TodoForm - state: form data, props: setTodos
  * TodoList - props: todos
    * TodoListItem - props: todo


npm install
npm build
npm run


```js
const obj = {
  a: 1, 
  b: 2,
  c: []
};

const copy = {
  ...obj, 
  c: [
    ...obj.c
  ]
};

const arr = [1,2,3];
const arr2 = [4,5,6];

const copyArr = [
  ...arr,
  ...arr2,
];

const myFunc = (a, b, c) => {}

myFunc(...arr)

```


















