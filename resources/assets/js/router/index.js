import Vue from 'vue';
import Router from 'vue-router';

import { Login, Register } from '../components/auth';

Vue.use(Router);

const router = new Router({
    routes: [
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

