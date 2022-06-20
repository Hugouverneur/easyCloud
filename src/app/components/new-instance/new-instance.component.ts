import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InstancesService } from 'src/app/services/instances.service';
import { Instance } from '../../models/instance.model';
import * as firebaseAuth from 'firebase/auth';
import { PowereshellService } from 'src/app/services/powereshell.service';

@Component({
  selector: 'app-new-instance',
  templateUrl: './new-instance.component.html',
  styleUrls: ['./new-instance.component.css']
})
export class NewInstanceComponent implements OnInit {

  newInstanceForm!: FormGroup;
  errorMessage!: string;

  constructor(private formBuilder: FormBuilder,
              private instancesService: InstancesService,
              private router: Router,
              private pss: PowereshellService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.newInstanceForm = this.formBuilder.group({
      vmName: ['', [Validators.required]],
      unity: ['', [Validators.required]],
      ram: ['', [Validators.required]],
      storage: ['', [Validators.required]],
      os: ['', [Validators.required]],
      serverName: ['', [Validators.required]],
    });
  }

  onSubmit() {
    const vmName = this.newInstanceForm.get('vmName')!.value;
    const unity = this.newInstanceForm.get('unity')!.value;
    const ram = this.newInstanceForm.get('ram')!.value;
    const storage = this.newInstanceForm.get('storage')!.value;
    const os = this.newInstanceForm.get('os')!.value;
    const uid = firebaseAuth.getAuth().currentUser?.uid;
    const serverName = this.newInstanceForm.get('serverName')!.value;


    const newInstance: Instance = {
        vmName: vmName,
        unity: unity,
        ram: ram,
        storage: storage,
        os: os,
        uid: uid,
        serverName: serverName
    }

    this.pss.createVm(newInstance).then(
      (data) => {

        newInstance['serverId'] = data;

        this.instancesService.newInstance(newInstance).then(
          () => {
            this.router.navigate(['/list-instances'])// TODO Rediriger vers la nouvelle instance créé
          },
          (error) => {
            this.errorMessage = error;
          }
        );

      }
    );
    
  }
}
