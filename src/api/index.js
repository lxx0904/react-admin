import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://rap2api.taobao.org/app/mock/268996/',
    timeout: 5000
});

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// instance.defaults.baseURL = 'https://api.example.com';

instance.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

instance.interceptors.response.use(function (response) {
    // return response;
    const { status, data } = response;
    if(status === 200) {
        // return data
        return Promise.resolve(data)
    } else {
        return Promise.reject(response)
    }
  }, function (error) {
      console.log(error)
    return Promise.reject(error);
});

export default instance