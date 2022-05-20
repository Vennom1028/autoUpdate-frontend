import React from 'react';
import axios from 'axios';

const devMode = '_self' in React.createElement('div');
const apiUrl = devMode ? 'http://localhost:5000/api' : 'https://api.royalproxies.io/api';

axios.interceptors.request.use(
    config => {
        config.url = apiUrl + config.url;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use((response) => response.data, (error) => Promise.reject(error.message));

export const api = {
    post: (path, data) => axios.post(path, data),
    get: (path) => axios.get(path)
}