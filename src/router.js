import {
  createBrowserRouter,
} from "react-router-dom";
import Register from './page/Register';
import List from './page/List';
import NoMatch from './page/NoMatch';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
    errorElement: <NoMatch />,
  },
  {
    path: "/list",
    element: <List />,
  },
]);

export default router;
