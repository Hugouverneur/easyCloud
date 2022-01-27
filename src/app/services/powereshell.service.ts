import { Injectable } from '@angular/core';
import * as PowerShell from 'powershell';

@Injectable({
  providedIn: 'root'
})
export class PowereshellService {

  constructor() { }

  createVm() {
    const ps = new PowerShell("echo 'Powershell works !'");
    ps.on("output", (data: any) => {
      console.log(data);
      
    })
  }

}
