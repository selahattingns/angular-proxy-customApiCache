import { Component } from '@angular/core';
import {APIProxyService} from "./proxy-cache/api-proxy.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public data: string = '';

  constructor(private apiProxyService: APIProxyService) {}

  getData() {
    this.data = this.apiProxyService.getData();
  }
}
