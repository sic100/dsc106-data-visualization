var colors = Highcharts.getOptions().colors;
Highcharts.chart('container', {

    chart: {
        type: 'streamgraph',
        marginBottom: 30,
        zoomType: 'x'
    },

    // Make sure connected countries have similar colors
    colors: [
        colors[0],
        colors[1],
        colors[2],
        colors[3],
        colors[4],
        // East Germany, West Germany and Germany
        Highcharts.color(colors[5]).brighten(0.2).get(),
        Highcharts.color(colors[5]).brighten(0.1).get(),

        colors[5],
        colors[6],
        colors[7],
        colors[8],
        colors[9],
        colors[0],
        colors[1],
        colors[3],
        // Soviet Union, Russia
        Highcharts.color(colors[2]).brighten(-0.1).get(),
        Highcharts.color(colors[2]).brighten(-0.2).get(),
        Highcharts.color(colors[2]).brighten(-0.3).get()
    ],

    title: {
        floating: true,
        align: 'left',
        text: 'Winter Olympic Medal Wins'
    },
    subtitle: {
        floating: true,
        align: 'left',
        y: 30,
        text: 'Source: <a href="https://www.sports-reference.com/olympics/winter/1924/">sports-reference.com</a>'
    },

    xAxis: {
        maxPadding: 0,
        type: 'category',
        crosshair: true,
        categories: [
            2000,
            2001,
            2002,
            2003,
            2004,
            2005,
            2006,
            2007,
            2008,
            2009,
            2010,
            2011,
            2012,
            2013,
            2014,
            2015,
            2016,
            2017,
            2018,    
        ],
        labels: {
            align: 'left',
            reserveSpace: false,
            rotation: 270
        },
        lineWidth: 0,
        margin: 20,
        tickWidth: 0
    },

    yAxis: {
        visible: false,
        startOnTick: false,
        endOnTick: false
    },

    legend: {
        enabled: false
    },

    annotations: [{
        labels: [{
            point: {
                x: 5.5,
                xAxis: 0,
                y: 30,
                yAxis: 0
            },
            text: 'Cancelled<br>during<br>World War II'
        }, {
            point: {
                x: 10,
                xAxis: 0,
                y: 20,
                yAxis: 0
            },
            text: 'Soviet Union fell,<br>Germany united'
        }],
        labelOptions: {
            backgroundColor: 'rgba(255,255,255,0.5)',
            borderColor: 'silver'
        }
    }],

    plotOptions: {
        series: {
            label: {
                minFontSize: 5,
                maxFontSize: 15,
                style: {
                    color: 'rgba(255,255,255,0.75)'
                }
            }
        }
    },

    // Data parsed with olympic-medals.node.js
    series: [{
        name: "Central",
        data: [
            16.1554558 , 15.74690867, 15.18106155, 14.61648076, 13.70378491,
            16.12411426, 13.39366751, 14.48420074, 12.5456848 , 11.41250698,
            12.39030167, 11.25501152, 10.36958452,  9.94374858, 10.23412981,
             9.58940438,  8.37881462,  8.15740774,  8.31211937        ]
    }, {
        name: "West",
        data: [
            13.90578044, 14.24392126, 14.79809891, 12.50907898, 12.12720361,
            11.53070009, 11.47218002, 11.50966951, 11.68455234, 10.50875858,
             9.05910993,  9.84002739,  9.24908711, 10.32079708,  9.49766419,
             9.36584179,  8.95983042,  9.93974383, 11.22875489        ]
    }, {
        name: "Northern Rockies and Plains",
        data: [
            9.3622386 , 8.71749162, 8.31697563, 8.66715651, 8.02457591,
            8.55130053, 8.17814159, 8.14816328, 7.82106505, 7.43367842,
            8.34892174, 7.70975054, 7.82813558, 7.42766908, 6.55940293,
            7.10106078, 5.70961323, 7.25874516, 7.06601931        ]
    }, {
        name: "Northeast",
        data: [
            13.82648077, 14.06563645, 13.44000258, 13.27559745, 12.7907031 ,
            13.67480985, 11.85412458, 12.39585571, 11.30100032,  9.90030761,
             9.93408847,  9.98660521,  9.25417245,  8.76349788,  8.62429045,
             8.66680822,  7.45700671,  7.55410922,  7.38634777        ]
    }, {
        name: "Northwest",
        data: [
            11.21263128, 10.61785667, 11.77082682, 10.15559929, 10.56998893,
            10.66750883,  9.88549285,  9.4054818 ,  9.67030675,  9.6294714 ,
             8.01531994,  8.72861948,  8.54799016, 10.15702288,  8.54688787,
             9.16716734,  6.77637805, 10.41651793, 10.20827228        ]
    }, {
        name: "South",
        data: [
            12.36231673, 12.00366235, 11.47889827, 11.85382817, 11.10190204,
            12.56933772, 11.38893978, 11.34994014, 10.47175807,  9.58990021,
            10.07737192, 10.44521658,  9.60205016,  9.11089554,  9.07591887,
            8.55469748,  8.08760752,  8.23577234,  8.64343992       ]
    }, {
        name: "Southwest",
        data: [
            9.22058968, 9.47677648, 9.40066683, 8.47379393, 8.91973543,
            8.41626692, 8.43965498, 9.04392013, 8.20652265, 8.13151705,
            7.35559807, 7.52033226, 7.66521987, 8.1813378 , 7.08565489,
            6.74538896, 7.04853515, 7.16157974, 7.11207024        ]
    }, {
        name: "Southeast",
        data: [
            14.94245699, 13.50608417, 12.70316375, 12.60151308, 13.01172349,
            13.4006143 , 12.95462732, 12.69023136, 11.01139242,  9.51686179,
            10.37503625,  9.95778915,  8.82788623,  8.24988973,  8.6558161 ,
             7.92618754,  7.78389326,  7.83932868,  7.45614365        ]
    }, {
        name: "UpperMidwest",
        data: [
            12.79143773, 13.00966828, 12.37717291, 12.1430919 , 10.9160845 ,
            12.96563361, 11.26743677, 11.91339561, 10.82224987, 10.08593794,
             9.78542378,  9.48581959,  9.2326274 ,  8.6383302 ,  9.00984485,
             8.37835843,  7.39014561,  7.39360819,  7.9431081        ]
    }, {
        name: "West",
        data: [
            13.90578044, 14.24392126, 14.79809891, 12.50907898, 12.12720361,
            11.53070009, 11.47218002, 11.50966951, 11.68455234, 10.50875858,
             9.05910993,  9.84002739,  9.24908711, 10.32079708,  9.49766419,
             9.36584179,  8.95983042,  9.93974383, 11.22875489        ]
    }],

    exporting: {
        sourceWidth: 800,
        sourceHeight: 600
    }

});
