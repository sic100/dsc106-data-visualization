Plotly.d3.csv('gdp_states1.csv', function(err, rows){
	function unpack(rows, key) {
		return rows.map(function(row) { return row[key]; });
	}

var data = [{

			type: 'choropleth',
			locationmode: 'USA-states',
			locations: unpack(rows, 'GeoName'),
			z: unpack(rows, '2016'),
			text: unpack(rows, 'GeoName'),
			zmin: 30000,
			zmax: 3000000,

			colorscale: [
			  [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
			  [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
			  [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
			],
		  colorbar: {
			title: 'GDP',
			thickness: 15,
			side: 'left'
		  },
		  marker: {
			line:{
			  color: 'rgb(255,255,255)',
			  width: 4
			}
		  }
		}];

  

console.log(data.locations);
var layout = {
		width: 600,
		height: 600,
		title: 'GDP by States in US',
		geo:{
		  scope: 'usa',
		  showlakes: true,
		  lakecolor: 'rgb(255,255,255)'
		}
	};
	Plotly.plot(my, data, layout, {showLink: false});
});
