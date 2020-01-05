Highcharts.chart('bar_container', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Stacked column chart'
    },
    xAxis: {
      categories: ['CO', 'NH3', 'NOx', 'Direct PM2.5', 'Direct PM10', 'SO2', 'VOC']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Emissions (%)'
      }
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
      shared: true
    },
    plotOptions: {
      column: {
        stacking: 'percent'
      }
    },
    series: [{
      name: 'Stationary Fuel Combustion',
      data: [8.52773349,  3.18866253, 27.40987461, 46.09230769, 35.97510373,
        73.42342342,  3.84188319]
    }, {
      name: 'Industrial and Other Processes',
      data: [27.87404548, 93.88839681, 14.27311912, 37.10769231, 46.14107884,
        22.97297297, 72.2407284]
    }, {
      name: 'Highway Vehicles',
      data: [35.75774104,  2.8343667 , 32.32758621,  6.15384615, 10.24896266,
        1.01351351, 11.91057813]
    },{
      name:'Non-Road Mobile',
      data:[27.84047999,  0.08857396, 25.98942006, 10.64615385,  7.63485477,
        2.59009009, 12.00681027]
    }]
  });