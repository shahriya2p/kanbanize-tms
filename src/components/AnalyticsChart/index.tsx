import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AnalyticsChart: React.FC = () => {
  // Sample data
  const tasks = [
    { id: 1, title: 'Task 1', completed: true },
    { id: 2, title: 'Task 2', completed: false },
    { id: 3, title: 'Task 3', completed: true },
    { id: 4, title: 'Task 4', completed: false },
    { id: 5, title: 'Task 5', completed: true },
  ];

  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  // Chart data
  const data = {
    labels: ['Completed Tasks', 'Total Tasks'],
    datasets: [
      {
        label: 'Task Progress',
        data: [completedTasks, totalTasks],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div>
      <h3>Task Completion Analytics</h3>
      <Line data={data} />
    </div>
  );
};

export default AnalyticsChart;
