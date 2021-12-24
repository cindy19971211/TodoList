import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';


// <App/> 前後的< />是JSX的語法，這個語法來自import React內，所以如果把import React拿掉，就會報錯
ReactDOM.render(<TodoList />,document.getElementById('root'));
