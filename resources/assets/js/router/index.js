import Vue from 'vue';
import Router from 'vue-router';

import { Login, Register } from '../components/auth';
import { Home, NotFound } from '../components';
import beforeEach from './beforeeach';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home',
            meta: {
                guest: false,
                needsAuth: false
            }
        },
        {
            path: '/login',
            component: Login,
            name: 'login',
            meta: {
                guest: true,
                needsAuth: false
            }
        },
        {
            path: '/register',
            component: Register,
            name: 'register',
            meta: {
                guest: true,
                needsAuth: false
            }
        },
        {
            path: '*',
            component: NotFound
        }
    ]
});

router.beforeEach(beforeEach);

export default router;

