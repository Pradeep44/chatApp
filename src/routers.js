import { createRouter, createWebHistory } from "vue-router";
import DashBoard from "./components/DashBoard.vue";
import SignUp from "./components/SignUp.vue";

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
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;