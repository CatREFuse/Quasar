import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./views/Home.vue'),
    },
    {
        path: '/search',
        name: 'SearchRedirect',
        component: () => import('./views/SearchRedrirect.vue'),
        props: (route: { query: { query: string; engine: string } }) => {
            return {
                query: route.query.query,
                engine: route.query.engine,
            };
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
