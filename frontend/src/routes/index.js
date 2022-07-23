import {
    createRouter,
    createWebHistory
} from 'vue-router'
// lazy loading with vite
const routes = [{
        path: "/",
        name: 'Landingpage',
        component: () => import('../views/Landingpage.vue')
    },
    {
        path: "/insights",
        name: 'Insights',
        component: () => import('../views/Insights.vue')
    },
    {
        path: "/callback",
        name: 'Callback',
        component: () => import('../views/Callback.vue')
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router