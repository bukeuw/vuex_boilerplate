import { isEmpty } from 'lodash';
import localforage from 'localforage';
import { setHttpToken } from '../helpers';

export const register = ({ dispatch }, { payload, context }) => {
    return axios.post('/api/register', payload).then(response => {
        dispatch('setToken', response.data.meta.token).then(() => {
            dispatch('setUser', response.data.data);
        });
    }).catch(error => {
        context.errors = error.response.data.errors;
    });
};

export const login = ({ dispatch }, { payload, context }) => {
    return axios.post('/api/login', payload).then(response => {
        dispatch('setToken', response.data.meta.token).then(() => {
            dispatch('setUser', response.data.data);
        });
    }).catch(error => {
        context.errors = error.response.data.errors;
    });
};

export const fetchUser = ({ dispatch }) => {
    return axios.get('/api/me').then(response => {
        dispatch('setUser', response.data.data);
    });
};

export const logout = ({ dispatch }) => {
    return axios.post('/api/logout').then(response => {
        dispatch('clearAuth');
    });
};

export const setUser = ({ commit }, user) => {
    commit('setAuthenticated', true);
    commit('setUserData', user);
};

export const setToken = ({ commit, dispatch }, token) => {
    if (isEmpty(token)) {
        return dispatch('checkTokenExist').then(token => {
            setHttpToken(token);
        });
    }

    commit('setToken', token);

    setHttpToken(token);
};

export const checkTokenExist = ({ commit, dispatch }, token) => {
    return localforage.getItem('authtoken').then(token => {
        if (isEmpty(token)) {
            return Promise.reject('TOKEN_DOES_NOT_EXIST');
        }

        return Promise.resolve(token);
    });
};

export const clearAuth = ({ commit }) => {
    commit('setAuthenticated', false);
    commit('setUserData', null);
    commit('setToken', null);
    setHttpToken(null);
};

