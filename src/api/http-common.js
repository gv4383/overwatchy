import axios from 'axios';

const HTTP = axios.create({
  baseURL: 'https://overwatch-hero-api.herokuapp.com/api/v1/heroes',
});

export default HTTP;
