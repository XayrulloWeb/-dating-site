import Login from "./Login/Login";
import Register from "./Register/Register"
import Home from "./Companents/Home/Home";
import User from "./Companents/User/User";

const routes = [
    {

        id: 1,
        path: '/',
        component: Home,
    },
    {
        id: 2,
        path: "/login",
        component: Login,
    },
    {
        id: 3,
        path: "/user",
        component: User,
    },
    {
        id: 4,
        path: "/register",
        component: Register,
    }

]
export default routes