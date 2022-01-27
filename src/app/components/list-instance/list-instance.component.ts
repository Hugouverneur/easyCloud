import { Component, OnInit } from '@angular/core';
import { Instance } from 'src/app/models/instance.model';
import { InstancesService } from 'src/app/services/instances.service';
import * as firebaseAuth from 'firebase/auth';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-list-instance',
  templateUrl: './list-instance.component.html',
  styleUrls: ['./list-instance.component.css']
})
export class ListInstanceComponent implements OnInit {

  instances: Instance[] = [];
  instancesKeys: any[] = [];
  instancesSubscription!: Subscription;

  constructor(private instancesService: InstancesService) { }

  ngOnInit(): void {
    this.getInstancesUser();
    
  }

  // Trouver comment retourner une observable depuis le service
  // Instance sera modifier que si c'est une observable
  getInstancesUser() {
    
    this.instancesSubscription = this.instancesService.instancesSubject.subscribe(
      (instance: Instance[]) => {
        this.instances = instance;
        this.instancesKeys = Object.keys(instance);
      }
    );
    this.instancesService.getInstancesUser();
    this.instancesService.emitInstances();
  }

  ngOnDestroy(): void {
    this.instancesSubscription.unsubscribe();
  }

}
