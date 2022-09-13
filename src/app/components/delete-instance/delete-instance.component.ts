import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstancesService } from 'src/app/services/instances.service';
import { PowereshellService } from 'src/app/services/powereshell.service';

@Component({
  selector: 'app-delete-instance',
  templateUrl: './delete-instance.component.html',
  styleUrls: ['./delete-instance.component.css']
})
export class DeleteInstanceComponent implements OnInit {

  constructor(private instancesService: InstancesService,
              private router: Router,
              private pss: PowereshellService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.deleteInstance();
  }

  deleteInstance() {
    this.instancesService.deleteInstance(this.route.snapshot.params['id']).then(
      () => {
        let instanceParams: any = {
          'vmId': this.route.snapshot.params['id'],
          'virtualizationServer': this.route.snapshot.params['virtualizationServer']
        }
        this.pss.deleteVm(instanceParams);
      }
    )
  }

}
