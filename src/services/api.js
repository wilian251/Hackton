import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pcjmmlqv06gvblof-gmnapp-nodejs.cfapps.eu10.hana.ondemand.com/service.xsodata/'
});

export default api;