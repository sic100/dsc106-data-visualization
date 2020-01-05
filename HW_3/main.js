/*
The purpose of this demo is to demonstrate how multiple charts on the same page
can be linked through DOM and Highcharts events and API methods. It takes a
standard Highcharts config with a small variation for each data set, and a
mouse/touch event handler to bind the charts together.
*/


/**
 * In order to synchronize tooltips and crosshairs, override the
 * built-in events with handlers defined on the parent element.
 */
['mousemove', 'touchmove', 'touchstart'].forEach(function (eventType) {
    document.getElementById('legendGrid').addEventListener(
        eventType,
        function (e) {
            var chart,
                point,
                i,
                event;

            for (i = 0; i < Highcharts.charts.length; i = i + 1) {
                chart = Highcharts.charts[i];
                // Find coordinates within the chart
                event = chart.pointer.normalize(e);
                // Get the hovered point
                point = chart.series[0].searchPoint(event, true);

                if (point) {
                    point.highlight(e);
                }
            }
        }
    );
});

/**
 * Override the reset function, we don't need to hide the tooltips and
 * crosshairs.
 */
Highcharts.Pointer.prototype.reset = function () {
    return undefined;
};

/**
 * Highlight a point by showing tooltip, setting hover state and draw crosshair
 */
Highcharts.Point.prototype.highlight = function (event) {
    event = this.series.chart.pointer.normalize(event);
    this.onMouseOver(); // Show the hover marker
    this.series.chart.tooltip.refresh(this); // Show the tooltip
    this.series.chart.xAxis[0].drawCrosshair(event, this); // Show the crosshair
};

/**
 * Synchronize zooming through the setExtremes event handler.
 */
function syncExtremes(e) {
    var thisChart = this.chart;

    if (e.trigger !== 'syncExtremes') { // Prevent feedback loop
        Highcharts.each(Highcharts.charts, function (chart) {
            if (chart !== thisChart) {
                if (chart.xAxis[0].setExtremes) { // It is null while updating
                    chart.xAxis[0].setExtremes(
                        e.min,
                        e.max,
                        undefined,
                        false,
                        { trigger: 'syncExtremes' }
                    );
                }
            }
        });
    }
}




// global data-structure to hold the energy breakup
var globalEnergyData = {
    keys: [],
    values: []
  };
  
// function to do deep-copy on the global data structure
function updateGlobalEnergyData(data) {
    globalEnergyData['values'] = [];
    for (var idx = 0; idx < data[0]['values'].length; idx ++) {
      var energyBreakup = data.map(elm => {return elm['values'][idx]});
      globalEnergyData['values'].push(energyBreakup);
    }
    globalEnergyData['keys'] = data.map(elm => elm['text']);
  }

// this method reacts only onmouseover on any of the nodes in the shared graphs
function onMouseoverChart(e) {
    if (e['target'] === 'node') {
      var nodeSplit = e['targetid'].split('-');
      var nodeId = nodeSplit[nodeSplit.length - 1];
      if (Number.isInteger(parseInt(nodeId)) && parseInt(nodeId) < globalEnergyData['values'].length) {
        renderPieChart(parseInt(nodeId));
      }
    } 
  }
// the nodeId is basically the x-axis value
// the actual breakup is retrieved from the global data-structure
function renderPieChart(nodeId) {
    var pieDataSet = globalEnergyData['keys'].map(function(elm, idx) {
      return {
        text: elm.split('.')[elm.split('.').length - 1],
        values: [globalEnergyData['values'][nodeId][idx]]
      }
    });
// this function is responsible for plotting the energy on
// successfully loading the JSON data
// It also plots the pie chart for nodeId=0
function onSuccessCb(jsonData) {
    var energyData = jsonData.filter(function(elm) {
        return elm['type'] === 'energy';
    }).map(function(elm) {
        return {
          values: elm['data'],
          text: elm['id']
        };
    });
    updateGlobalEnergyData(energyData);
    var priceData = jsonData.filter(function(elm) {
        return elm['type'] === 'price';
    }).map(function(elm) {
        return {
          values: elm['data'],
          text: elm['id']
        };
    });
    var tempData = jsonData.filter(function(elm) {
        return elm['type'] === 'temperature';
    }).map(function(elm) {
        return {
          values: elm['data'],
          text: elm['id']
        };
    });













// Get the data. The contents of the data file can be viewed at
Highcharts.ajax({
    url: 'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/activity.json',
    dataType: 'text',
    success: function (activity) {

        activity = JSON.parse(activity);
        activity.datasets.forEach(function (dataset, i) {

            // Add X values
            dataset.data = Highcharts.map(dataset.data, function (val, j) {
                return [activity.xData[j], val];
            });

            var chartDiv = document.createElement('div');
            chartDiv.className = 'chart';
            document.getElementById('container').appendChild(chartDiv);

            Highcharts.chart(chartDiv, {
                chart: {
                    marginLeft: 40, // Keep all charts left aligned
                    spacingTop: 20,
                    spacingBottom: 20
                },
                title: {
                    text: dataset.name,
                    align: 'left',
                    margin: 0,
                    x: 30
                },
                credits: {
                    enabled: false
                },
                legend: {
                    enabled: false
                },
                xAxis: {
                    crosshair: true,
                    events: {
                        setExtremes: syncExtremes
                    },
                    labels: {
                        format: '{value} km'
                    }
                },
                yAxis: {
                    title: {
                        text: null
                    }
                },
                tooltip: {
                    positioner: function () {
                        return {
                            // right aligned
                            x: this.chart.chartWidth - this.label.width,
                            y: 10 // align to title
                        };
                    },
                    borderWidth: 0,
                    backgroundColor: 'none',
                    pointFormat: '{point.y}',
                    headerFormat: '',
                    shadow: false,
                    style: {
                        fontSize: '18px'
                    },
                    valueDecimals: dataset.valueDecimals
                },
                series: [{
                    data: dataset.data,
                    name: dataset.name,
                    type: dataset.type,
                    color: Highcharts.getOptions().colors[i],
                    fillOpacity: 0.3,
                    tooltip: {
                        valueSuffix: ' ' + dataset.unit
                    }
                }]
            });
        });
    }
});

