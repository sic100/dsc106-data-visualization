var data =  [{
    name: ['CF', 'C'],
      data: [526230,572688,546227]
  }, {
      name: ['CF', 'NE'],
      data: [555233,611044,579193]
  },{
      name: ['CF', 'NW'],
      data: [521095,592072,586020]

  },{
      name: ['CF', 'SE'],
      data : [534868,607867,555918]
  },{
      name: ['CF', 'SW'],
      data: [526477,603620,594662]
  },{
      name: ['FF', 'C'],
      data: [315738,357638,341113]
  },{
      name: ['FF', 'NE'],
      data: [333140,366626,361700]
  },{
      name: ['FF', 'NW'],
      data: [312657,355243,351612]
  },{
      name: ['FF', 'SE'],
      data: [20920,350417,333551]
  },{
      name: ['FF', 'SW'],
      data: [328780,376954,342805]
  },{
    name: ['HM', 'C'],
    data: [1213425,1374453,1364454]
  },{
    name: ['HM', 'NE'],
    data: [1280303,1466507,1380063]
  },{
    name: ['HM', 'NW'],
    data: [1301675,1478973,1351293]
  },{
    name: ["HM", "SE"],
    data: [1233342,1401670,1334204]
  },{
      name: ['HM', 'SW'],
      data: [1315120,1448688,1351220]
  }
]


document.addEventListener('DOMContentLoaded', function(){
    var myChart = Highcharts.chart('containerBar', {
      chart: {
        type: 'column'
      },
      title: {
        text: "sales on October"
      },
      xAxis: {
        categories: ['oct in 2016', 'oct in 2017', 'oct in 2018']
        },
      series: data
});
      

  
  });



var regionValue = [{name: '-C', data: [2055393, 2304779, 2251794]},
{name: 'NE', data: [2168676, 2444177, 2320956]},
{name: 'NW', data: [2135427, 2426288, 2288925]},
{name: 'SE', data: [2089130, 2359954, 2223673]},
{name: 'SW', data: [2170377, 2429262, 2288687]}];
  document.addEventListener('DOMContentLoaded', function(){
    var myChart = Highcharts.chart('barOne', {
      chart: {
        type: 'line'
      },
      title: {
        text: "overall sales on October according to region"
      },
      
      series: regionValue,
      xAxis: {
        categories: ['oct in 2016', 'oct in 2017', 'oct in 2018']
        },
         
        
});
      

  
});

var dataTwo = [{name: 'CF', data: [2663903, 2987291, 2862020]},
{name: 'FF', data: [1611235, 1806878, 1730781]},
{name: 'HM', data: [6343865, 7170291, 6781234]}]
document.addEventListener('DOMContentLoaded', function(){
    var myChart = Highcharts.chart('barTwo', {
      chart: {
        type: 'bar'
      },
      title: {
        text: "overall sales on October according to region"
      },
      
      series: dataTwo,
      xAxis: {
        categories: ['oct in 2016', 'oct in 2017', 'oct in 2018']
        },
         
        
});
      

  
});
