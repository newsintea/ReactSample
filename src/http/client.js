import axios from 'axios';

const httpClient = axios.create({
  baseURL: '/* write your API endpoint */',
});

export default httpClient;
