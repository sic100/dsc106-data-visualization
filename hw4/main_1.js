
google.charts.load("current", {packages:["calendar"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
 var dataTable = new google.visualization.DataTable();
 dataTable.addColumn({ type: 'date', id: 'Date' });
 dataTable.addColumn({ type: 'number', id: 'Won/Loss' });
 dataTable.addRows([
    
    [ new Date(2019, 9, 28), 38177 ],
    [ new Date(2019, 9, 29), 38705 ],
    [ new Date(2019, 9, 30), 40000 ],
    [ new Date(2019, 9, 31), 48029 ],
    [ new Date(2019, 10, 1), 48623 ],
    [ new Date(2019, 10, 2), 58345 ],
    [ new Date(2019, 10, 3), 58436 ],
    [ new Date(2019, 10, 4), 58447 ],
    [ new Date(2019, 10, 5), 58177 ],
    [ new Date(2019, 10, 6), 58705 ],
    [ new Date(2019, 10, 7), 48210 ],
    [ new Date(2019, 10, 8), 48029 ],
    [ new Date(2019, 10, 9), 48823 ],
    [ new Date(2019, 10, 10), 38345 ],
    [ new Date(2019, 10, 11), 38436 ],
    [ new Date(2019, 10, 12), 38447 ],
    [ new Date(2019, 10, 13), 28177 ],
    [ new Date(2019, 10, 14), 28705 ],
    [ new Date(2019, 10, 15), 28210 ],
    [ new Date(2019, 10, 16), 18029 ],
    [ new Date(2019, 10, 17), 18823 ],
    [ new Date(2019, 10, 18), 18345 ],
    [ new Date(2019, 10, 19), 18436 ],
    [ new Date(2019, 10, 20), 18447 ]
  ]);

 var chart = new google.visualization.Calendar(document.getElementById('calendar_basic'));

 var options = {
   title: "Number of Times YYQX Was Searched",
   height: 350,
 };

 chart.draw(dataTable, options);
}
