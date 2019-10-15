import axios from 'axios';

const HTTP = axios.create({
  baseURL: 'https://api.coindesk.com/v1/bpi/currentprice.json',
});

export default HTTP;
