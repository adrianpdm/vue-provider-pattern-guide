/* eslint-disable no-unused-vars */
const axios = {
  get: (route = 'adrian') => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = {
          name: route,
          job: 'web developer',
          age: 30
        };
        // resolve({ data });
      }, 2500);
    })
  },
  post: (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: 'OK',
          statusCode: 200,
          message: 'Success in saving data',
          data,
        });
      }, 2500);
    })
  }
}

export default axios