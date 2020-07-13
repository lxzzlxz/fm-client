import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { NbSearchService } from '@nebular/theme';
import * as echarts from 'echarts';
import { HttpClient } from '@angular/common/http';
import 'echarts/map/js/china.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  value = '';
  @ViewChild('chartMap')
  chartMap: ElementRef; // 获取DOM节点的对象



  option = {
    title: {
      top: 10,
      text: '3D中国地图',
      left: 'center',
    },
    // backgroundColor: 'rgba(0, 10, 52, 1)',
    geo: {
      map: 'china',
      aspectScale: 0.75,
      layoutCenter: ['50%', '50%'], // 地图位置
      layoutSize: '118%',
      roam: true,
      itemStyle: {
        normal: {
          borderColor: 'rgba(147, 235, 248, 1)',
          borderWidth: 0.5,
          color: {
            type: 'linear-gradient',
            x: 0,
            y: 1500,
            x2: 2500,
            y2: 0,
            colorStops: [{
              offset: 0,
              color: '#009DA1' // 0% 处的颜色
            }, {
              offset: 1,
              color: '#005B9E' // 50% 处的颜色
            }],
            global: true // 缺省为 false
          },
          opacity: 0.5,
        },
        emphasis: {
          areaColor: '#2a333d'
        }
      },
      regions: [{
        name: '南海诸岛',
        itemStyle: {
          areaColor: 'rgba(0, 10, 52, 1)',
          borderColor: 'rgba(0, 10, 52, 1)'
        },
        emphasis: {
          areaColor: 'rgba(0, 10, 52, 1)',
          borderColor: 'rgba(0, 10, 52, 1)'
        }
      }],
      z: 2
    },
    series: [{
      type: 'map',
      map: 'china',
      tooltip: {
        show: false
      },
      label: {
        show: true,
        color: '#FFFFFF',
        fontSize: 16
      },
      aspectScale: 0.75,
      layoutCenter: ['50%', '50%'], // 地图位置
      layoutSize: '118%',
      roam: true,
      itemStyle: {
        normal: {
          borderColor: 'rgba(147, 235, 248, 0.6)',
          borderWidth: 0.8,
          areaColor: {
            type: 'linear-gradient',
            x: 0,
            y: 1200,
            x2: 1000,
            y2: 0,
            colorStops: [{
              offset: 0,
              color: '#009DA1' // 0% 处的颜色
            }, {
              offset: 1,
              color: '#005B9E' // 50% 处的颜色
            }],
            global: true // 缺省为 false
          },
        },
        emphasis: {
          areaColor: 'rgba(147, 235, 248, 0)'
        }
      },
      zlevel: 1
    }]
  };
  constructor(
    private searchService: NbSearchService,
    private http: HttpClient,
  ) {
    this.searchService.onSearchSubmit().subscribe(data => {
      this.value = data.term;
    });
  }

  ngOnInit() {
    const ec = echarts as any;
    this.initCharts();
    ec.init(document.getElementById('main')).setOption(this.option);
  }
  initCharts() {
    const ec = echarts as any;
    const lineChart = ec.init(document.getElementById('lineChart'));

    const lineChartOption = {
      title: {
        text: 'ECharts 折线图'
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }]
    };
    lineChart.setOption(lineChartOption);
    // 显示扇形图表2
    const mychart2 = ec.init(document.getElementById('chart2'), 'light');
    const option2 = {
      title: {
        text: 'ECharts 扇形图'
      },
      tooltip: {},


      series: [{
        type: 'pie',
        data: [
          { value: 1, name: 'IT' },
          { value: 2, name: '律师' }
        ]
      }]
    };

    mychart2.setOption(option2);
  }
}
