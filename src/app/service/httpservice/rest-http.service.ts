import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RestHttpService {
  private readonly domain: string;
  private readonly prefix: string;

  constructor(private httpClient: HttpClient) {
    this.domain = environment.baseDomain + "/api/";
    this.prefix = environment.httpProtocol + "://";
  }

  public sendPostRequest(service: string, path: string, body: any): Observable<any> {
    let url = this.prefix + service + "." + environment.servicePrefix + "." + this.domain + path;
    console.log("Calling url: " + url)
    return this.httpClient.post(url, body)
  }

  public sendGetCollectionRequest(service: string, path: string): Observable<any> {
    let url = this.prefix + service + "." + environment.servicePrefix + "." + this.domain + path
    console.log("Calling url: " + url)
    return this.httpClient.get(url)
  }

  sendGetRequest(service: string, path: string, id: string): Observable<any> {
    let url = this.prefix + service + "." + environment.servicePrefix + "." + this.domain + path + "/" + id
    console.log("Calling url: " + url)
    return this.httpClient.get(url)
  }

  public sendPutRequest(service: string, path: string, body: any): Observable<any> {
    let url = this.prefix + service + "." + environment.servicePrefix + "." + this.domain + path
    console.log("Calling url: " + url)
    return this.httpClient.put(url, body)
  }

  public sendDeleteRequest(service: string, path: any): Observable<any> {
    let url = this.prefix + service + "." + environment.servicePrefix + "." + this.domain + path
    console.log("Calling url: " + url)
    return this.httpClient.delete(url)
  }


}
