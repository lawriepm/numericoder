import axios from 'axios';
import settings from 'settings';

class Api {
  constructor() {
    this.baseUrl = settings.baseUrl;
  }

  async get(resource, params) {
    let url = `${this.baseUrl}/${resource}`;
    
    if (params) {
      const searchParams = new URLSearchParams(params);
      url += `?${searchParams.toString()}`;
    }

    const response = await axios.get(url, params);
    return response.data;
  }
}

export default Api;
