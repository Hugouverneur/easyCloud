import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InstancesService } from 'src/app/services/instances.service';
import { PowereshellService } from 'src/app/services/powereshell.service';
import * as firebaseAuth from 'firebase/auth';
import { Instance } from '../../models/instance.model';

@Component({
  selector: 'app-edit-instance',
  templateUrl: './edit-instance.component.html',
  styleUrls: ['./edit-instance.component.css']
})
export class EditInstanceComponent implements OnInit {

  editInstanceForm!: FormGroup;
  errorMessage!: string;
  instance: any = {};
  instanceId: string = this.route.snapshot.params['id'];

  constructor(private formBuilder: FormBuilder,
              private instancesService: InstancesService,
              private router: Router,
              private pss: PowereshellService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getInstance();
    this.initForm();
  }

  initForm() {
    console.log(this.instance);
    this.editInstanceForm = this.formBuilder.group({
      vmName: ['', [Validators.required]],
      unity: ['', [Validators.required]],
      ram: ['', [Validators.required]],
      storage: ['', [Validators.required]],
      os: ['', [Validators.required]],
    });
  }

  getInstance() {
    this.instancesService.getSingleInstance(this.instanceId).then(
      (data) => {
        this.instance = data;

        // Complète les champs avec les données récupéré
        this.editInstanceForm.setValue({
          vmName: this.instance.vmName,
          unity: this.instance.unity,
          ram: this.instance.ram,
          storage: this.instance.storage,
          os: this.instance.os
        });
      }
    );
  }

  onSubmit() {
    console.log('sub');
    
    const vmName = this.editInstanceForm.get('vmName')!.value;
    const unity = this.editInstanceForm.get('unity')!.value;
    const ram = this.editInstanceForm.get('ram')!.value;
    const storage = this.editInstanceForm.get('storage')!.value;
    const os = this.editInstanceForm.get('os')!.value;
    const uid = firebaseAuth.getAuth().currentUser?.uid;

    const newInstance: Instance = {
        vmName: vmName,
        unity: unity,
        ram: ram,
        storage: storage,
        os: os,
        uid: uid
    }

    this.instancesService.editInstance(newInstance, this.instanceId).then(
      () => {
        // this.pss.createVm(newInstance); TODO Appeller le script PShell edit
        this.router.navigate(['/instance/' + this.instanceId])
      },
      (error) => {
        console.log(error);
        
        this.errorMessage = error;
      }
    );
  }

}
