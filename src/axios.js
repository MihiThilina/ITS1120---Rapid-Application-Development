import axios from "axios";

//base Url

const instance = axios.create({
    baseURL: 'https://fakestoreapi.com/',

});


export default instance;