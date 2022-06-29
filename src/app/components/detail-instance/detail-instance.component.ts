import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Instance } from 'src/app/models/instance.model';
import { InstancesService } from 'src/app/services/instances.service';
import { Chart, ChartDataset } from 'chart.js';
import { Subscription, interval, timer, map, Observable, share } from 'rxjs';
import { PowereshellService } from 'src/app/services/powereshell.service';

@Component({
  selector: 'app-detail-instance',
  templateUrl: './detail-instance.component.html',
  styleUrls: ['./detail-instance.component.css']
})
export class DetailInstanceComponent implements OnInit {

  instance: any = {};
  instanceId: string = this.route.snapshot.params['id'];

  instanceMonitoring$: Observable<number[]>;

  constructor(private instancesService: InstancesService,
              private powereshellService: PowereshellService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getInstance(this.instanceId);
  }

  getInstance(instanceId: string) {
    this.instancesService.getSingleInstance(instanceId).then(
      (data) => {
        this.instance = data;

        this.instanceMonitoring$ = interval(3000).pipe(
          map(() => this.getMonitoring()),
          share() // Share observable (one observable with multiple subscribers)
        );
      }
    );
  }

  getMonitoring(): any {
    let vmParams = {
      'instanceId': this.instanceId,
      'virtualizationServer': this.instance.serverName
    }
    console.log(vmParams);
    
    // return this.powereshellService.getInstanceMonitoring(vmParams); // <- Appel powershell
    return [Math.floor(Math.random()*100), Math.floor(Math.random()*100), Math.floor(Math.random()*100)] // Pour tester en dev
  }
}
