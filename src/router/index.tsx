import { Navigate, RouteObject } from "react-router-dom";
import Article from "../views/Article/Article";
import About from "../views/About/About";
import Feel from "../views/Feel/Feel";
import Message from "../views/Message/Message";
import Home from "../views/Home/Home";
import Dynamic from "../views/Dynamic/Dynamic";

const routers: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/home"></Navigate>,
  },
  {
    path: "/home",
    element: <Home></Home>,
    children: [
      {
        path: "",
        element: <Dynamic></Dynamic>,
      },
      {
        path: "article",
        element: <Article></Article>,
      },
      {
        path: "feel",
        element: <Feel></Feel>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "message",
        element: <Message></Message>,
      },
    ],
  },
];

export default routers;
