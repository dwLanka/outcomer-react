import axios from "axios";

export function axiosInstance(baseURL, requestConfig = {}) {
  const instance = axios.create({
    baseURL,
  });

  instance.interceptors.request.use(
    async (config) => {
      config.headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      };

      return {
        ...config,
        ...requestConfig,
      };
    },
    (error) => {
      Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async function (error) {
      const originalRequest = error.config;

      if (error?.response?.status === 403 && !originalRequest._retry) {
        originalRequest._retry = true;

        return instance(originalRequest);
      }
      return Promise.reject(error);
    }
  );

  return instance;
}
