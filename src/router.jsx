import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/pages/Home";
import Movies from "./components/pages/movies";
import Login from "./components/pages/Login";
import Movie from "./components/pages/movie";
import UserProvider from "./context/UserContext";
import Profile from "./components/pages/Profile";
import SignUp from "./components/pages/SignUp";

export const router = createBrowserRouter([
    {
        element:
            (
                <UserProvider>
                    <App />
                </UserProvider>

            ),
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/movies',
                element: <Movies />,
            },
            {
                path: '/tv',
                element: <h1>this is  tv pages</h1>,
            },
            {
                path: '/People',
                element: <h1>this is peple</h1>,
            },
            {
                path: '/more',
                element: <h1>more</h1>,
            },
            {
                path: '/movies/:id',
                element: <Movie />,
            }, {
                path: '/login',
                element: <Login />,
            },

{
    path:'/signup',
    element :<SignUp/>
},



            {
                path: '/profile',
                element: <Profile />
            }
       


        ],

    },

]);