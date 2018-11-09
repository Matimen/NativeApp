import axios from "axios";

export let getData = () => {
    return axios.get('http://172.16.2.171:90/api/test');
};