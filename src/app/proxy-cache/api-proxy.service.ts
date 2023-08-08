import { Injectable } from '@angular/core';
import { RemoteApiService } from './remote-api.service';

@Injectable({
  providedIn: 'root',
})
export class APIProxyService {
  private remoteApi: RemoteApiService;
  private data: string = "";
  private isDataReceived: boolean = false;

  /**
   *
   * @param remoteApiService
   */
  constructor(private remoteApiService: RemoteApiService) {
    this.remoteApi = remoteApiService;
  }

  /**
   * @return string
   */
  getData(): string {
    if (!this.isDataReceived) {
      this.data = this.remoteApi.getData();
      this.isDataReceived = true;
      console.log('Cached data saved.');
    }
    console.log('Get Data')
    return this.data;
  }
}
