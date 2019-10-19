import axios from 'axios';

const baseDomain = 'https://overwatch-hero-api.herokuapp.com';
const baseURL = `${baseDomain}/api`;

const HTTP = axios.create({
  baseURL,
});

export default HTTP;
