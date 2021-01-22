import React from 'react';
import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const instance = axios.create({
  baseURL: BASE_URL,
});
export default {
  getData: () =>
    instance({
      method: 'GET',
      url: '/users',
      params: {
        search: 'parameter',
      },
    }),
  postData: () =>
    instance({
      method: 'POST',
      url: '/api',
      data: {
        item1: 'data1',
        item2: 'item2',
      },
    }),
};
