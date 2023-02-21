import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Gigs from "./Pages/Gigs/Gigs";
import Gig from "./Pages/Gig/Gig";
import Orders from "./Pages/Orders/Orders";
import Messages from "./Pages/Messages/Messages";
import Message from "./Pages/Message/Message";
import MyGig from "./Pages/MyGig/MyGig";
import Add from "./Pages/Add/Add";
import Footer from "./Components/Footer/Footer";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

function App() {
      const Layout = () => {
            return (
                  <div className="App">
                        <Navbar />
                        <Outlet />
                        <Footer />
                  </div>
            );
      };
      const router = createBrowserRouter([
            {
                  path: "/",
                  element: <Layout />,
                  children: [
                        { path: "/", element: <Home /> },
                        { path: "/gigs", element: <Gigs /> },
                        { path: "/gig:id", element: <Gig /> },
                        { path: "/orders", element: <Orders /> },
                        { path: "/mygigs", element: <MyGig /> },
                        { path: "/add", element: <Add /> },
                        { path: "/Messages", element: <Messages /> },
                        { path: "/Message:id", element: <Message /> },
                  ],
            },
      ]);
      return (
            <div>
                  <RouterProvider router={router} />
            </div>
      );
}

export default App;
