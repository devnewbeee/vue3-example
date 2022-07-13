import {createWebHistory, createRouter} from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'main',
        redirect: '/vue-exam'
    },

    {
        path: '/App',
        name: 'App',
        component: () => import(/* webpackChunkName: "App" */ '@/App')
    },

    {
        path: '/vue-exam',
        name: 'vue-exam',
        component: () => import(/* webpackChunkName: "vue-exam" */ '/src/pages/vue-exam')
    },
    
    {
        path: '/element-test',
        name: 'element-test',
        component: () => import(/* webpackChunkName: "element-test" */ '/src/pages/element-test')
    }
];

export const router =  createRouter({
    history: createWebHistory(),
    routes,
});