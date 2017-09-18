import Vue from 'vue';
import Router from 'vue-router';

import { Login, Register } from '../components/auth';
import { Home } from '../components';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home',
            meta: {
                guess: true,
                needsAuth: false
            }
        },
        {
            path: '/login',
            component: Login,
            name: 'login',
            meta: {
                guess: true,
                needsAuth: false
            }
        },
        {
            path: '/register',
            component: Register,
            name: 'register',
            meta: {
                guess: true,
                needsAuth: false
            }
        }
    ]
});

export default router;

