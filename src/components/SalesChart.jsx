import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const SalesChart = ({ salesData }) => {
  useEffect(() => {
    const ctx = document.getElementById('salesChart').getContext('2d');

    const chartRef = useRef(null);
    
    // Destroy the previous chart instance if it exists
    if (chartRef.current) {
        chartRef.current.destroy();
    }

    // Create a new chart instance
    chartRef.current = new Chart(ctx, {
        type: 'line', //can be changed it to bar, pie, etc.
        data: {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6','Day 7','Day 8','Day 9','Day 10','Day 11','Day 12'],
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

    // Cleanup function to destroy the chart on component unmount
    return () => {
        if (chartRef.current) {
            chartRef.current.destroy();
        }
    
    // return <canvas id="salesChart" width="200" height="100"></canvas>;


    // Cleanup function to destroy the chart on component unmount
    return () => {
        if (chartRef.current) {
            chartRef.current.destroy();
        }
    };
    return <canvas id="salesChart" width="200" height="100"></canvas>;


    // Cleanup function to destroy the chart on component unmount
    return () => {
        if (chartRef.current) {
            chartRef.current.destroy();
        }
    };
    return <canvas id="salesChart" width="200" height="100"></canvas>;


    // Cleanup function to destroy the chart on component unmount
    return () => {
        if (chartRef.current) {
            chartRef.current.destroy();
        }
    };
    return <canvas id="salesChart" width="200" height="100"></canvas>;


    // Cleanup function to destroy the chart on component unmount
    return () => {
        if (chartRef.current) {
            chartRef.current.destroy();
        }
    };


    // Cleanup function to destroy the chart on component unmount
    return () => {
        if (chartRef.current) {
            chartRef.current.destroy();
        }
    };
    return <canvas id="salesChart" width="200" height="100"></canvas>;
    }
});
}
export default SalesChart;
