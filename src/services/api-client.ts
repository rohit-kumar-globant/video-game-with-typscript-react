import axios from 'axios';

export default axios.create({
    baseURL:'https://api.rawg.io/api/',
    params:{
        key:'bfc3c34eba1e48ed9e1766f526a3ca6c'
    }
})