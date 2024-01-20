import { createBrowserRouter } from "react-router-dom";
import Layout from "../common/layout";
import Chat from "../screens/Chat";
import Page404 from "../screens/Page404";

export const router = createBrowserRouter([
  {
    path: "/outcomer-react/",
    element: <Layout />,
    errorElement: <Page404 />,
    // loader: rootLoader,
    children: [
      {
        path: "/outcomer-react/chat/:name",
        element: <Chat />,
        // loader: teamLoader,
      },
    ],
  },
  {},
]);
