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
    this.editInstanceForm = this.formBuilder.group({
      vmName: ['', [Validators.required]],
      ram: ['', [Validators.required]],
      storage: ['', [Validators.required]],
    });
  }

  getInstance() {
    this.instancesService.getSingleInstance(this.instanceId).then(
      (data) => {
        this.instance = data;
        
        // Complète les champs avec les données récupéré
        this.editInstanceForm.setValue({
          vmName: this.instance.vmName,
          ram: this.instance.ram,
          storage: this.instance.storage,
        });
      }
    );
  }

  onSubmit() {
    const vmName = this.editInstanceForm.get('vmName')!.value;
    const ram = this.editInstanceForm.get('ram')!.value;
    const storage = this.editInstanceForm.get('storage')!.value;

    const editInstance: Instance = {
        vmName: vmName,
        unity: this.instance.unity,
        ram: ram,
        storage: storage,
        os: this.instance.os,
        serverName: this.instance.serverName,
        uid: this.instance.uid,
        vmId: this.instance.vmId,
        serverId: this.instance.serverId,
    }

    this.instancesService.editInstance(editInstance, this.instanceId).then(
      () => {
        this.pss.editVm(editInstance);
        this.router.navigate(['/instance/' + this.instanceId])
      },
      (error) => {
        console.log(error);
        
        this.errorMessage = error;
      }
    );
  }

  confirmBeforeDelete() {
    if(confirm('Etes-vous sûr de vouloir supprimer votre instance !')) {
      this.router.navigate(['/delete-instance/' + this.instanceId]);
    }
  }
}
