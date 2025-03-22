import React, { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';
//import './Dashboard.css'; // Import the CSS file here
Chart.register(...registerables);

const SalesChart = ({ salesData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = document.getElementById('salesChart').getContext('2d');

    // Destroy the previous chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create a new chart instance
    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10', 'Day 11', 'Day 12'],
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
    };
  }, [salesData]);

  return <canvas id="salesChart" width="200" height="100"></canvas>;
};

const DashboardOverview = ({ totalOrders, pendingOrders, revenue, products, certifications }) => {
  return (
    <div>
      <h2>Dashboard Overview</h2>
      <p>Total Orders: {totalOrders}</p>
      <p>Pending Orders: {pendingOrders}</p>
      <p>Revenue: {revenue}</p>
      <p>Products: {products}</p>
      <p>Certifications: {certifications}</p>
    </div>
  );
};

const Dashboard = () => {
  const [salesData] = useState([12, 19, 3, 5, 2, 3, 7]);
  const [totalOrders] = useState(45);
  const [pendingOrders] = useState(2);
  const [revenue] = useState('581.00');
  const [products] = useState(120);
  const [certifications] = useState(15);

  return (
    <div className="container-fluid py-4 px-4">
      <DashboardOverview 
        totalOrders={totalOrders} 
        pendingOrders={pendingOrders} 
        revenue={revenue} 
        products={products} 
        certifications={certifications} />
      <SalesChart salesData={salesData} />
    </div>
  );
};

export default Dashboard;
