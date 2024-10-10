/**
 * https://github.com/FrontSpot-Community/code-battle/blob/86a9f251665e89bd677d7f0ed2aa07f0aab2d7da/src/common/services/httpClient/httpClient.js#L7
 * https://snyk.io/advisor/npm-package/axios/functions/axios.create
 * https://github.com/axios/axios
 */
import axios from 'axios';

export class HttpService {
  constructor(baseUrl, method, axios_instance_config) {
    this.baseUrl = baseUrl;
    this.method = method;
    this.axiosClient = (url, method, clientInformation) => axios({ ...axios_instance_config });
   
  }

  async post(url, method, clientInformation) {

    // if (ENV.NODE_ENV_ == 'development') {
    //   console.log('axiosClient::', url, method);
    // } 
    return await this.axiosClient(url, method, clientInformation);    
  }

  async get(url, method, clientInformation) {
   
   const axiosRespose = await this.axiosClient(url, method, clientInformation);   
  //  if (ENV.NODE_ENV_ == 'development') {
  //   console.log('axiosRespose:', url, method, axiosRespose);
  //  }
   return axiosRespose;
  }

  put(url, data) {
    return this.request({
      method: 'put',
      url,
      data
    });
  }

  request({ method, url, data }) {
    return this.service.request({
      method,
      url,
      responseType: 'json',
      data
    })
      .then(({ data }) => data);
  }

  delete(url, data) {
    return this.request(url, {
      method: 'delete',
      url,
      data
    });
  }
}