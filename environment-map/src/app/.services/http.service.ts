import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EdgeNodeReply } from '../.common/interfaces';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private consecutiveErrors: number;

  constructor(public httpClient: HttpClient) {
    this.consecutiveErrors = 0;
  }

  public httpGet(source: string): Promise<any> {
    return lastValueFrom(this.httpClient.get(source));
  }

  public httpPost(data: any, destination: string): Promise<any> {
    return lastValueFrom(this.httpClient.post(destination, data));
  } 

  public httpResponseHandle(response: any): EdgeNodeReply {
    response = <EdgeNodeReply>response;
    // Log for debug only
    console.log('--- HTTP RESPONSE -------------------');
    console.log('- RESPONSE.NAME: ' + response.name);
    console.log('- RESPONSE.MESSAGE: ' + response.message);
    console.log('- RESPONSE.STATUS: ' + response.status);
    console.log('-------------------------------------');
    return response;
  }

  public httpErrorHandle(error: any): HttpErrorResponse {
    error = <HttpErrorResponse>error;
    // Log for debug only
    console.log('--- HTTP ERROR ----------------------');
    console.log('- ERROR.NAME: ' + error.name);
    console.log('- ERROR.MESSAGE: ' + error.message);
    console.log('- ERROR.STATUS: ' + error.status);
    console.log('-------------------------------------');
    this.consecutiveErrors++;
    console.log('- Consecutive errors: ' + this.consecutiveErrors)
    console.log('-------------------------------------');
    return error;
  }

  public getConsecutiveErrors(): number {
    return this.consecutiveErrors;
  }

}

