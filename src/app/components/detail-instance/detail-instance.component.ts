import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Instance } from 'src/app/models/instance.model';
import { InstancesService } from 'src/app/services/instances.service';
import { Chart, ChartDataset } from 'chart.js';
import { Subscription, interval, timer, map, Observable } from 'rxjs';

@Component({
  selector: 'app-detail-instance',
  templateUrl: './detail-instance.component.html',
  styleUrls: ['./detail-instance.component.css']
})
export class DetailInstanceComponent implements OnInit {

  instance: any = {};
  instanceId: string = this.route.snapshot.params['id'];

  test: Observable<number>;

  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartLabels = ['Stockage', 'RAM', 'Processeur'];
  barChartData: ChartDataset[] = [
    {data: [0, 0, 0], label: '%'},
  ];

  constructor(private instancesService: InstancesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getInstance(this.instanceId);
    this.getMonitoring()
    this.test = interval(1000);
  }

  getInstance(instanceId: string) {
    this.instancesService.getSingleInstance(instanceId).then(
      (data) => {
        this.instance = data;
      }
    );
  }

  getMonitoring() {
    console.log('getMonitoring');
    this.barChartData[0].data = [40, 70, 80];
    console.log(this.barChartData);
        
  }
}
