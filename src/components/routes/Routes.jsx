import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Details from "../pages/Details";
import ChefRecipe from "../pages/ChefRecipe";
import ChefDetails from "../pages/ChefDetails";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://bangla-food-server-mrmozammal-gmailcom.vercel.app/recipes')
            },
            {
                path: '/recipes/:id',
                element: <PrivateRoutes><ChefDetails /></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://bangla-food-server-mrmozammal-gmailcom.vercel.app/recipes/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs />,
                loader: () => fetch('https://bangla-food-server-mrmozammal-gmailcom.vercel.app/blogs')
            },
            {
                path: '/details',
                element: <Details />
            },
            {
                path: '/profile',
                element: <PrivateRoutes><Profile /></PrivateRoutes>
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
]);
export default router;