import React, { FunctionComponent, useState } from 'react';
import { render } from 'react-dom';

import react_logo from './assets/img/react.png';
import { TodoList } from './Todo';

const Hello: FunctionComponent<{ value: string }> = ({ value }) => {
  return <span>{value} World from Typescript ♥️</span>;
};

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <img className="logo" src={react_logo} alt="react logo" />
      <p className={counter < 0 ? 'error' : 'ok'}>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Inc</button>
      <button onClick={() => setCounter(counter - 1)}>Dec</button>
      <TodoList></TodoList>
    </>
  );
};

const App: FunctionComponent = () => {
  return (
    <div className="container">
      <Hello value={'Hello'}></Hello>
      <Counter></Counter>
    </div>
  );
};

render(<App />, document.getElementById('root'));
