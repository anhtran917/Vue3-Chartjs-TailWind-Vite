
export const data = {
    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 10, 10]
      }
      
    ]
  }
  
export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
        display: true,
        position:'bottom',
        labels: {
          pointStyle: 'circle',
          usePointStyle:true,
        },
        
    },  
    datalabels: {
      formatter: function(value, context) {
        let total = 0;
        context.chart.data.datasets[0].data.forEach(function (value) {
          total+=value;
        });
        return Math.round(value/total*100) + '%';
      },
      anchor:'end',
      color: "pink",
      align : 'end',
      offset:4,
      labels: {
        value: {},
        title: {
          color: "black",
        },
      },
    },
    labels: {
      render: 'percentage',
      fontColor: ['green', 'white', 'red'],
      precision: 2
    }
  }  
}
    

  