import { HttpMethod } from "@/constants";
import {RequestBody} from "@/domains";

export class RestClient {

  constructor (private readonly baseURL: string) {}

  private getUrlOf (uri: string): string {
    const slash = uri.indexOf('/') === 0 ? '' : '/';
    return `${this.baseURL}${slash}${uri}`;
  }

  private request (uri: string, method: HttpMethod = HttpMethod.GET): Promise<any> {
    return fetch(this.getUrlOf(uri), { method })
            .then(response => response.json());
  }

  private requestWithBody (uri: string, method: HttpMethod, body?: RequestBody): Promise<any> {
    const headers = { 'Content-Type': 'application/json' };
    const requestInit: RequestInit = { method, headers, body: JSON.stringify(body) };
    return fetch(this.getUrlOf(uri), requestInit).then(response => response.json());
  }

  public get (uri: string): Promise<any> {
    return this.request(uri);
  }

  public delete (uri: string) {
    return this.request(uri, HttpMethod.DELETE);
  }

  public post (uri: string, body?: RequestBody) {
    return this.requestWithBody(uri, HttpMethod.POST, body);
  }

  public put (uri: string, body?: RequestBody) {
    return this.requestWithBody(uri, HttpMethod.PUT, body);
  }

  public patch (uri: string, body?: RequestBody) {
    return this.requestWithBody(uri, HttpMethod.PATCH, body);
  }

}
