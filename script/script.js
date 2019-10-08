var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            lineTension:0,
            label: 'My First dataset',
            backgroundColor: 'rgba(255, 99, 132,0.5)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
            yAxisID:'a'
        },{
            label: 'temp',
            backgroundColor: 'rgba(99,132,255,0.5)',
            borderColor: 'rgba(99,132,255)',
            data: [0.1,0.25,0.35,0.42,0.123,0.98,0.384],
            yAxisID:'b'
        }]
    },

    // Configuration options go here
    options: {
         scales: {
            yAxes: [{
                id:'a',
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 50
                }
            },{
                id:'b',
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 1
                },
                position: 'right'
            }]
        }
    }
});