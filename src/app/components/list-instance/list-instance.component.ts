import { Component, OnInit } from '@angular/core';
import { Instance } from 'src/app/models/instance.model';
import { InstancesService } from 'src/app/services/instances.service';
import * as firebaseAuth from 'firebase/auth';

@Component({
  selector: 'app-list-instance',
  templateUrl: './list-instance.component.html',
  styleUrls: ['./list-instance.component.css']
})
export class ListInstanceComponent implements OnInit {

  instances: any = [];

  constructor(private instancesService: InstancesService) { }

  ngOnInit(): void {
    this.getInstancesUser(firebaseAuth.getAuth().currentUser?.uid);
    console.log(this.instances)
  }

  getInstancesUser(uid: any) {
    this.instancesService.getInstancesUser(uid)
  }

}
