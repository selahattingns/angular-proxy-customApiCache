import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RemoteApiService {
  getData(): string {
    console.log('Remote api service implemented.');
    return 'Remote api data';
  }
}
