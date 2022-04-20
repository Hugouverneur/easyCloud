import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Instance } from 'src/app/models/instance.model';
import { InstancesService } from 'src/app/services/instances.service';

@Component({
  selector: 'app-detail-instance',
  templateUrl: './detail-instance.component.html',
  styleUrls: ['./detail-instance.component.css']
})
export class DetailInstanceComponent implements OnInit {

  instance: any = {};
  instanceId: string = this.route.snapshot.params['id'];

  constructor(private instancesService: InstancesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getInstance(this.instanceId);
  }

  getInstance(instanceId: string) {
    this.instancesService.getSingleInstance(instanceId).then(
      (data) => {
        this.instance = data;
      }
    );
  }

}
