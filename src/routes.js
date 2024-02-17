import Login from "./Login/Login";
import Home from "./Companents/Home/Home";


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


]
export default routes