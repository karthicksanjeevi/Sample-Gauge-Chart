$(window).on('load', function(){
    displayGaugeChart();
});


function displayGaugeChart(){
    var totalEstimatedCost = 39.2;
    var expenditureBeforeDeduction = 39.2;
    var expenditureAfterDetection = 28.4;
    var totalRolls = 13;
    var totalCost = 6700;
    var costSaved = 6700;
    var NotDetected = 13;
    var NoOfPositives = 40.5;

    var chart = c3.generate({
        bindto: "#totalExpenditureGauge",
        data: {
            columns: [
                ['Cost', expenditureBeforeDeduction]
            ],
            type: 'gauge',
        },
        size:{
            width : 190,
            height : 160
        },
        gauge: {
            min: 0,
            max: 100,
            width: 40
        },
        color: {
            pattern: ['#FF6666', '#FF4D4D', '#FF1919', '#FF0000'],
            threshold: {
                values: [30, 60, 90, 100]
            }
        },
       tooltip: {
            format: {
                title: function (d) { return 'Something is Bad : $' + totalEstimatedCost; },
                value: function (value, ratio, id) {
                      var format = d3.format('.1%');
                      return format(value/100);
                  }
            }
       }
    });


    var chart = c3.generate({
        bindto: "#totalSavingsGauge",
        data: {
            columns: [
                ['Cost Saved', expenditureAfterDetection]
            ],
            type: 'gauge',
        },
        size:{
            width : 190,
            height : 160
        },
        gauge: {
            min: 0,
            max: 100,
            width: 40
        },
        color: {
            pattern: ['#80FF80', '#4DFF4D', '#19FF19', '#00FF00'],
            threshold: {
                values: [30, 60, 80, 100]
            }
        },
        tooltip: {
            format: {
                title: function (d) { return 'I can Save Upto : $' + totalCost; },
                value: function (value, ratio, id) {
                      var format = d3.format('$');
                      return format(costSaved);
                  }
            }
       }
    });

    var chart = c3.generate({
        bindto: "#noOfTruckRollsGauge",
        data: {
            columns: [
                ['Count', totalRolls]
            ],
            type: 'gauge',
        },
        size:{
            width : 190,
            height : 160
        },
        gauge: {
            min: 0,
            max: 100,
            width: 40
        },
        color: {
            pattern: ['#66E0FF', '#33D6FF', '#19D1FF', '#00CCFF'],
            threshold: {
                values: [30, 40, 50, 100]
            }
        },
        tooltip: {
            format: {
                title: function (d) { return 'Number of Events: ' + NotDetected; }
            }
       }
    });

    var chart = c3.generate({
        bindto: "#noOfTruckRollsSavedGauge",
        data: {
            columns: [
                ['Count', NoOfPositives]
            ],
            type: 'gauge',
        },
        size:{
            width : 190,
            height : 160
        },
        gauge: {
            label:{
                format: function(value, ratio){
                  return value; //returning here the value and not the ratio
                 },
            },
            min: 0,
            max: 100,
            width: 40
        },
        color: {
            pattern: ['#00FF00', '#19FF19', '#4DFF4D', '#80FF80'],
            threshold: {
                values: [30, 60, 90, 100]
            }
        },
        tooltip: {
            format: {
                title: function (d) { return 'Number of Positives: ' + NoOfPositives; },
            }
       }
    });
}
