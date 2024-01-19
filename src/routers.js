import { createRouter, createWebHistory } from "vue-router";
import DashBoard from "./components/DashBoard.vue";
import SignUp from "./components/SignUp.vue";
import LogIn from "./components/LogIn.vue";

const routes = [
    {
        name: 'DashBoard',
        component: DashBoard,
        path:'/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path:'/signup'
    },
    {
        name: 'LogIn',
        component: LogIn,
        path:'/login'
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;