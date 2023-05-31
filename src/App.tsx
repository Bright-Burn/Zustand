import './App.css';
import { Decrement, Increment } from './components';
import { Counter } from './components/counter/Counter';
import { Todo } from './components/todos/Todo';

function App() {

  return (
    <div className='container'>
      <Increment />
      <Decrement />
      <Counter />
      <Todo />
    </div>
  );
}

export default App;
