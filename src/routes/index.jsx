import { createBrowserRouter } from "react-router-dom";
import Layout from "../common/layout";
import Chat from "../screens/Chat";
import Page404 from "../screens/Page404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Page404 />,
    // loader: rootLoader,
    children: [
      {
        path: "/chat/:name",
        element: <Chat />,
        // loader: teamLoader,
      },
    ],
  },
  {},
]);
