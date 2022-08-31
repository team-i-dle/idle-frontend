import axios from "axios";

const httpClient = axios.create({
  baseURL: `http://${process.env.NEXT_PUBLIC_IP}:${process.env.NEXT_PUBLIC_PORT}`,
  withCredentials: true,
  headers: {
    'Cache-Control': 'no-cache',
  },
});

// httpClient.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
// httpClient.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
httpClient.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
httpClient.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default httpClient;
