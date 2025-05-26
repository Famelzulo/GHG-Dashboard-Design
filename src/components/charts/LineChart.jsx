import React from 'react';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from "chartjs-plugin-datalabels";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ data }) => {
  const years = Object.keys(data);
  const values = Object.values(data);

  const chartData = {
    labels: years,
    datasets: [
      {
        label: 'Core Indicator Scenario',
        data: values,
        borderColor: '#22C55E',
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, 'rgba(34, 197, 94, 0.2)');
          gradient.addColorStop(1, 'rgba(34, 197, 94, 0)');
          return gradient;
        },
        tension: 0.2,
        fill: 'start',
        pointBackgroundColor: '#22C55E',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 3,
        pointHoverRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        display: true,
      },
      title: {
        display: true,
        text: 'Core Indicator Scenario to 2030',
        font: {
          size: 18,
          weight: 'bold',
        },
        padding: {
          top: 0,
          bottom: 40,
        },
      },
      tooltip: {
        enabled: false
      },
      datalabels: {
        color: '#22C55E',
        anchor: 'bottom',
        align: 'top',
        offset: 5,
        font: {
          weight: 'bold',
          size: 12
        },
        formatter: function (value) {
          return value;
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          color: 'rgba(0, 0, 0, 0.1)',
        },
        border: {
          display: false,
        },
        ticks: {
          padding: 1,
        },
      },
      y: {
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
        },
        border: {
          display: false,
        },
        ticks: {
          padding: 10,
        },
        min: 10,
        max: 30,
      },
    },
    elements: {
      point: {
        pointStyle: 'circle',
      },
    }
  };

  return (
    <div className="w-full h-[260px]">
      <Line data={chartData} options={options} plugins={[ChartDataLabels]} />
    </div>
  );
};

export default LineChart; 