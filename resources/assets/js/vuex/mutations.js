import localforage from 'localforage';
import { isEmpty } from 'lodash';

export const setToken = (state, token) => {
    if (isEmpty(token)) {
        localforage.removeItem('authtoken');

        return;
    }

    localforage.setItem('authtoken', token);
};

export const setAuthenticated = (state, authBool) => {
    state.user.authenticated = authBool;
}

export const setUserData = (state, data) => {
    state.user.data = data;
}

