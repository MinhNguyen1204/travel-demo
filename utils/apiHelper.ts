import axios, { AxiosInstance, AxiosResponse } from "axios";

export const headers = {
  "Content-Type": "application/json",
  "x-channel": "2",
  "x-device-id": "web",
  "x-device-type": "PC",
  "x-lang": "en",
  "x-platform": "ONLINE",
};
const instance: AxiosInstance = axios.create({
  baseURL: "",
  headers,
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config): any {
    const newConfig = { ...config };

    return { newConfig, ...headers };
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response.data;
  },
  function (error) {
    const { data, status, message } = error.response;

    return Promise.reject(error);
  }
);

export default instance;
