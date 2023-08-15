import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Room from './components/Room';

function App() {
  const router = createBrowserRouter([
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/room/:roomId",
        element: <Room />,
      }
  ])
  return ( <RouterProvider router={router} />)
}

export default App;
