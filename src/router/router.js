import { createRouter,createWebHistory } from 'vue-router'
import userPage from '@/pages/userPage'
import Main from '@/pages/Main'



const routes = [
    {
        path:'/',
        component: Main
    },
    {
        path:'/users',
        component: userPage
    }

]

const router = createRouter({
    routes,
    history:createWebHistory(process.env.BASE_URL)
})

export default router;