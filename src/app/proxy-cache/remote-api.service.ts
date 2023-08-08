import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RemoteApiService {
  getData(): string {
    console.log('Remote Api Data');
    return 'Remote Api Data';
  }
}
