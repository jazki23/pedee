// Example small chart setup
const createSmallChart = (id, color) => {
    new Chart(document.getElementById(id), {
      type: 'line',
      data: {
        labels: ["", "", "", "", ""],
        datasets: [{
          data: [10, 30, 25, 50, 70],
          borderColor: color,
          borderWidth: 2,
          fill: false,
          tension: 0.4
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: { x: { display: false }, y: { display: false } },
        elements: { point: { radius: 0 } }
      }
    });
  };
  
  createSmallChart('widthGainChart', '#007bff');
  createSmallChart('lengthGainChart', '#007bff');
  createSmallChart('depthGainChart', '#007bff');
  
  // Example severity level chart
  new Chart(document.getElementById('severityLevelChart'), {
    type: 'bar',
    data: {
      labels: ['Low', 'Moderate', 'High', 'Critical'],
      datasets: [{
        label: 'Severity',
        data: [20, 35, 25, 15],
        backgroundColor: ['#2ecc71', '#f1c40f', '#e67e22', '#e74c3c']
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } }
    }
  });
  