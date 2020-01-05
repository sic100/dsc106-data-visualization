Highcharts.chart('container', {
    chart: {
        type: 'packedbubble',
        height: '100%'
    },
    title: {
        text: 'title'
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value}m CO<sub>2</sub>'
    },
    plotOptions: {
        packedbubble: {
            minSize: '20%',
            maxSize: '100%',
            zMin: 0,
            zMax: 1000,
            layoutAlgorithm: {
                gravitationalConstant: 0.05,
                splitSeries: true,
                seriesInteraction: false,
                dragBetweenSeries: true,
                parentNodeLimit: true
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 250
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series: [{
        name: 'Northwest',
        data: [{
            name: 'Washington',
            value: 767.1
        }, 
        {
            name: "Oregon",
            value: 69.8
        },
        {
            name: "Idaho",
            value: 67.7
        }]
    }, {
        name: 'West',
        data: [{
            name: "California",
            value: 8.2
        },
        {
            name: "Nevada",
            value: 9.2
        }]
    }, {
        name: 'Southwest',
        data: [{
            name: "Arizona",
            value: 8.2
        },
        {
            name: "New Mexico",
            value: 9.2
        },
        {
            name: "Utah",
            value: 7.1
        },
        {
            name: "Colorado",
            value: 7.1
        }]
    },
     {
        name: 'West North Central',
        data: [{
            name: "Montana",
            value: 7.2
        },
        {
            name: "North Dakota",
            value: 8.1
        },
        {
            name: "Wyoming",
            value: 17.8
        },
        {
            name: "Nebraska",
            value: 34
        },{
            name: "NSouth Dakota",
            value: 34
        }]},
        {
        name: 'East North Central',
        data: [{
            name: "Minnesota",
            value: 6.5
        },
        {
            name: "Wisconsin",
            value: 6.5
        },
        {
            name: "Michigan",
            value: 98.6
        },{
            name: "Iowa",
            values: 11
        }]
        
    },{

        name: 'Central',
        data: [{
            name: "Missouri",
            value: 6.5
        },
        {
            name: "Illinois",
            value: 6.5
        }]},
        {
            name: 'South',
            data: [{
                name: "Nepal",
                value: 6.5
            },
            {
                name: "Georgia",
                value: 6.5
            }]},
            {
                name: 'Southeast',
                data: [{
                    name: "Nepal",
                    value: 6.5
                },
                {
                    name: "Georgia",
                    value: 6.5
                }]},{
                    name: 'Northeast',
                    data: [{
                        name: "Nepal",
                        value: 6.5
                    },
                    {
                        name: "Georgia",
                        value: 6.5
                    }]}]
});