import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './Hello.tsx';

ReactDOM.render(
  <Hello compiler={1} framework="react" />,
  document.getElementById('app'),
);

// import styles from "./index.css";

// async function foo() {
//   return await 1;
// }

// foo().then(function(val) {
//   console.log(val);
// });
