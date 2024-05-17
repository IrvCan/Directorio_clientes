import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Cliente from './components/Cliente.tsx';
import { NewClient } from './components/newClient.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Cliente />,
  },
  {
    path: "/nuevo-cliente",
    element: <NewClient />,
  },
  {
    path: "/cliente/:id",
    element: <NewClient />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  //<React.StrictMode>
  <RouterProvider router={router} />
  //</React.StrictMode>,
)
