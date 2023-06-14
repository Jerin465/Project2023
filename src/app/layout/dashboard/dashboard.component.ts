import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DashboardService } from './../../services/dashboard.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    // lineChart
    public lineChartData: Array<any> = [{ data: [], label: 'Monthly Collection' }];
    public lineChartLabels: Array<any> = [];
    public lineDailyChartData: Array<any> = [{ data: [], label: 'Daily Collection' }];
    public lineDailyChartLabels: Array<any> = [];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineDailyChartColors: Array<any> = [
        {
            // grey
            backgroundColor: '#58e97d',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartColors: Array<any> = [
        {
            // grey
            backgroundColor: '#535353',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'bar';
    constructor(public dashboardService: DashboardService) {}

    ngOnInit() {
        this.getGraphData();
    }

    getGraphData() {
        this.dashboardService.getAll().subscribe((result: any) => {
            if (result) {
                const { MonthlyData, dailyData } = result;
                this.lineChartLabels = MonthlyData.map((_x) => _x.dateValue);
                this.lineChartData[0].data = MonthlyData.map((_x) => _x.total);
                console.log(dailyData);

                this.lineDailyChartLabels = dailyData.map((_x) => _x.dateValue);
                this.lineDailyChartData[0].data = dailyData.map((_x) => _x.total);
            }
        });
    }

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
}
