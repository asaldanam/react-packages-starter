import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Bar } from '../.';

const App = () => {
  //@ts-ignore
  casque.length = 3;
  return (
    <div>
      <Bar />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
