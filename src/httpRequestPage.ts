import axios, { AxiosResponse } from 'axios';

export default class HttpRequest {
  public async axiosGet(url: string) : Promise <AxiosResponse> {
    const resp = await axios.get(url);
    return resp;
  }

  public async axiosPost(url: string) : Promise <AxiosResponse> {
    const resp = await axios.post(url);
    return resp;
  }

  public async axiosDelete(url: string) : Promise <AxiosResponse> {
    const resp = await axios.delete(url);
    return resp;
  }
}