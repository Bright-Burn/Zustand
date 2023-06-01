import { Counter } from "./counter/Counter";
import { Decrement } from "./decrement/Decrement";
import { Increment } from "./increment/Increment";
import { Todo } from "./todos/todo";

export function CommentsMain() {

    return (
        <div className='container'>
            <Increment />
            <Decrement />
            <Counter />
            <Todo />
        </div>
    );
}