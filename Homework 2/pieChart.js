document.addEventListener('DOMContentLoaded', function(){
    var pieChart = Highcharts.chart('pieOne', {
      chart: {
        type: 'pie'
      },
      title: {
        text: "sales proportions of three items from 2016 to 2019"
      },
     
      series: [{
        
        data: [['Hamburger',317267030], ['Chicken fillet',132154618], ['Fish Fillet',79426764]]
    }
    ]
      
    
    });
  
  });


  document.addEventListener('DOMContentLoaded', function(){
    var pieChart = Highcharts.chart('pieTwo', {
      chart: {
        type: 'pie'
      },
      title: {
        text: "sales proportions of 5 locations from 2016 to 2019"
      },
     
      series: [{
        
        data: [['Nortg East',108941496], ['North West',107341797], ['South East',105734607], ['South West',103982603], ['Central', 102847909]]
    }
    ]
      
    
    });
  
  });

  document.addEventListener('DOMContentLoaded', function(){
    var pieChart = Highcharts.chart('barThree', {
      chart: {
        type: 'line'
      },
      title: {
        text: "average of sales in a week for 3 items"
      },
      xAxis:{
          categories: ['Monday', "Tuesday", 'Wednesday', 'Thursday', 'Friday', "Saturday", "Sunday"]
      },
     
      series: [{
        name: 'Hamburger',
        data: [['Monday', 36273.7],
        ['Tuesday', 36068.35],
        ['Wednesday', 36260.95],
        ['Thursday', 35893.45],
        ['Friday', 36384.2],
        ['Saturday', 36073.28],
        ['Sunday', 35891.280000000006]]
    },
    {
        name: 'Chicken fillet',
        data: [['Monday', 15408.75],
        ['Tuesday', 15105.05],
        ['Wednesday', 15289.85],
        ['Thursday', 15181.0],
        ['Friday', 15179.84],
        ['Saturday', 14772.119999999999],
        ['Sunday', 15367.16]]
    },{
        name: 'Fish fillet',
        data: [['Monday', 8950.3],
        ['Tuesday', 8831.25],
        ['Wednesday', 9241.1],
        ['Thursday', 9671.5],
        ['Friday', 10553.36],
        ['Saturday', 8021.280000000001],
        ['Sunday', 8056.4400000000005]]
    }
    
        ]
    
      
    
    });
  
  });