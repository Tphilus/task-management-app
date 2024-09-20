
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './router/index';
import { StateProvider } from './context/state-provider';
// import { TodoProvider } from './components/TodoContext';

function App() {


  return (
    <>
      {/* <TodoProvider> */}
      <StateProvider >
        <RouterProvider router={router} />
      </StateProvider>
      {/* </TodoProvider> */}
    </>
  )
}

export default App
