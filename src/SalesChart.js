import React, { useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const SalesChart = ({ salesData }) => {
  useEffect(() => {
    const ctx = document.getElementById('salesChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar', //can be changed it to bar, pie, etc.
      data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Week 1', 'Week 2', 'Month 1'],
        datasets: [
          {
            label: 'Sales',
            data: salesData,
            borderColor: 'rgb(54, 14, 214)',
            backgroundColor: 'rgba(53, 16, 216, 0.2)',
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [salesData]);

  return <canvas id="salesChart" width="200" height="100"></canvas>;
};

export default SalesChart;