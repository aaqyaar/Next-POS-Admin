import axios, {
  AxiosResponse,
  AxiosRequestHeaders,
  AxiosInstance,
} from "axios";
import { getGeneralApiProblem } from "./api.problem";

class ApiService {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: "https://jsonplaceholder.typicode.com/",
      timeout: 700000,
    });

    this.instance.defaults.headers.common["Content-Type"] = "application/json";

    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: any) => {
        return Promise.reject(error);
      }
    );
  }

  private async request<T>(
    method: string,
    endpoint: string,
    data?: any,
    headers?: AxiosRequestHeaders
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.instance.request({
        method,
        url: endpoint,
        data,
        headers,
      });

      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        throw getGeneralApiProblem(
          error.response?.status || 500,
          error.message
        );
      } else {
        throw getGeneralApiProblem(500, error.message);
      }
    }
  }

  public get<T>(endpoint: string, headers?: AxiosRequestHeaders): Promise<T> {
    return this.request("GET", endpoint, undefined, headers);
  }

  public post<T>(
    endpoint: string,
    data?: any,
    headers?: AxiosRequestHeaders
  ): Promise<T> {
    return this.request("POST", endpoint, data, headers);
  }

  public put<T>(
    endpoint: string,
    data?: any,
    headers?: AxiosRequestHeaders
  ): Promise<T> {
    return this.request("PUT", endpoint, data, headers);
  }

  public delete<T>(
    endpoint: string,
    headers?: AxiosRequestHeaders
  ): Promise<T> {
    return this.request("DELETE", endpoint, undefined, headers);
  }
}

export default new ApiService();
