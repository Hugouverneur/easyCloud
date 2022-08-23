import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InstancesService } from 'src/app/services/instances.service';
import { Instance } from '../../models/instance.model';
import * as firebaseAuth from 'firebase/auth';
import { PowereshellService } from 'src/app/services/powereshell.service';
import { LogarithmicScale } from 'chart.js';

@Component({
  selector: 'app-new-instance',
  templateUrl: './new-instance.component.html',
  styleUrls: ['./new-instance.component.css']
})
export class NewInstanceComponent implements OnInit {

  newInstanceForm!: FormGroup;
  errorMessage!: string;
  instanceAvailableIso!: [any];

  constructor(private formBuilder: FormBuilder,
              private instancesService: InstancesService,
              private router: Router,
              private pss: PowereshellService) { }

  ngOnInit(): void {
    this.getInstanceIso();
    this.initForm();
  }

  initForm() {
    this.newInstanceForm = this.formBuilder.group({
      vmName: ['', [Validators.required]],
      ram: ['', [Validators.required]],
      ramUnity: ['', [Validators.required]],
      storage: ['', [Validators.required]],
      storageUnity: ['', [Validators.required]],
      processor: ['', [Validators.required]],
      os: ['', [Validators.required]],
      virtualizationServer: ['', [Validators.required]],
    });
  }

  onSubmit() {
    const vmName = this.newInstanceForm.get('vmName')!.value;
    const ram = this.newInstanceForm.get('ram')!.value;
    const ramUnity = this.newInstanceForm.get('ramUnity')!.value;
    const storage = this.newInstanceForm.get('storage')!.value;
    const storageUnity = this.newInstanceForm.get('storageUnity')!.value;
    const processor = this.newInstanceForm.get('processor')!.value;
    const os = this.newInstanceForm.get('os')!.value;
    const uid = firebaseAuth.getAuth().currentUser?.uid;
    const virtualizationServer = this.newInstanceForm.get('virtualizationServer')!.value;


    const newInstance: Instance = {
        vmName: vmName,
        ram: ram,
        ramUnity: ramUnity,
        storage: storage,
        storageUnity: storageUnity,
        processor: processor,
        os: os,
        uid: uid,
        virtualizationServer: virtualizationServer
    }

    this.pss.createVm(newInstance).then(
      (data: any) => {
        newInstance['vmId'] = data.vmId;
        newInstance['serverId'] = data.serverId;
        
        this.instancesService.newInstance(newInstance).then(
          () => {
            this.router.navigate(['/list-instances'])// TODO Rediriger vers la nouvelle instance créé
          },
          (error) => {
            this.errorMessage = error;
          }
        );

      },
      (error) => {
        console.log(error);
        
      }
    );
    
  }

  getInstanceIso() {
    this.pss.getInstanceISO().then(
      (returnAvailableIso: [any]) => {
        this.instanceAvailableIso = returnAvailableIso;
      }
    )
  }
}
