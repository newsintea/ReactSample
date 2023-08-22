import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://pi2estiafc.execute-api.ap-northeast-1.amazonaws.com/v1/',
});

export default httpClient;
