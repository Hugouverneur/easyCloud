import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Instance } from '../models/instance.model';

@Injectable({
  providedIn: 'root'
})
export class PowereshellService {

  constructor(private http: HttpClient) {}

  // Methode préfaite pour faire nos requetes vers la base de donnée
  private async request(method: string, url: string, data?: any) {
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body'
    });

    return new Promise((resolve, reject) => {
      result.subscribe(resolve, reject);
    });
  }

  createVm(vmParams: Instance) {
    return this.request('POST', `${environment.serverUrl}/createvm`, vmParams)
  }

  editVm(vmParams: Instance) {
    return this.request('POST', `${environment.serverUrl}/setvmconfig`, vmParams)
  }

  deleteVm(vmParams: any) {
    return this.request('POST', `${environment.serverUrl}/deletevm`, vmParams)
  }

  getInstanceMonitoring(vmParams: any) {    
    return this.request('GET', `${environment.serverUrl}/instance-monitoring`, vmParams)
  }

  getInstanceISO() {
    return this.request('GET', `${environment.serverUrl}/initcreation`, )
  }

  switchPower(vmParams) {
    console.log('POWERRRRRRR');
    return this.request('POST', `${environment.serverUrl}/`, vmParams)
  }

  getVmStatus(vmParams: any) {
    return this.request('GET', `${environment.serverUrl}/getvmstatus`, vmParams)
  }

}
