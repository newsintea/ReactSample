import httpClient from './client';

export function registerUserApi(request) {
  return httpClient.post('user', request);
}

export function getUsersApi() {
  return httpClient.get('user');
}
