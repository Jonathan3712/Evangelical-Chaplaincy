import React from 'react';
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Evangelical Chaplaincy</h1>
      <p>Weolcome to Bridge - Syracuse University</p>
    </div>
  );
}

export default App;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchTodos } from './redux/actions/todoActions';


// const App = () => {
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todos);

//   useEffect(() => {
//     dispatch(fetchTodos());
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>Evagelical Chaplaincy</h1>
//       <h2>Jay Koshy</h2>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo._id}>{todo.title}</li>
//         ))}
//       </ul>
//     </div>
    
//   );
// };

// export default App;