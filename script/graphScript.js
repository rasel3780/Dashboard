
  var monthlySalesData = [3000, 4500, 5000, 5800, 5500, 5000, 6800, 7200, 7500, 8800, 9000, 9200];
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  var ctx = document.getElementById('sales-chart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: months,
      datasets: [{
        label: 'Monthly Sales',
        data: monthlySalesData,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 1
      }]
    },
    options: {
        width: 600, 
        height: 300,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
