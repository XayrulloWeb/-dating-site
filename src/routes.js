import Login from "./Login/Login";
import Home from "./Companents/Home/Home";
import User from "./Companents/User/User";


const routes = [
    {

        id:1,
        path: '/',
        component: Home,
    },
    {
        id:2,
        path: "/login",
        component: Login,
    },
    {
        id:3,
        path: "/user",
        component: User,
    },


]
export default routes