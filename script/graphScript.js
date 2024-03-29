//Graph
var monthlySalesData = [3000, 4500, 5000, 5800, 5500, 5000, 6800, 7200, 7500, 8800, 9000, 9200];
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

var ctx = document.getElementById('line-chart').getContext('2d');
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
    responsive: true,
    maintainAspectRatio: false,
    width: 600,
    height: 300,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});



//pie chart
var topFiveCategoriesData = {
  labels: ['Medicine', 'Cosmetic', 'Groceries', 'Cloth', 'Baby Food'],
  datasets: [{
    data: [300, 200, 150, 100, 50],
    backgroundColor: ['#000ce8', '#0fe800', '#fff700', '#f2700c', '#c002e6'],
  }]
};

var ctx = document.getElementById('pie-chart').getContext('2d');
var pieChart = new Chart(ctx, {
  type: 'pie',
  data: topFiveCategoriesData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
      title: {
        display: true,
        text: 'Top Five Selling Categories',
        font: {
          size: 18
        },
        padding: 20
      }
    }
  }
});

