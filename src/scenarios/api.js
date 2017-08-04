import axios from 'axios';

class Api {
  constructor() {
    this.baseUrl = 'http://owl.yii.backend.local/api';
  }
  getUrl(path) {
    return this.baseUrl + path;
  }
  Get(path, options) {
    console.log("Fghfgh");
    const url = this.getUrl(path);
    return axios.get(url, options);
  }
  Post(path, data) {
    const url = this.getUrl(path);
    return axios.post(url, data);
  }
  Patch(path, data) {
    const url = this.getUrl(path);
    return axios.patch(url, data);
  }
}
export default new Api();