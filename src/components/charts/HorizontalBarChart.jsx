import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const HorizontalBarChart = ({ data }) => {
  const greenPalette = {
    light: 'rgba(77, 233, 134, 0.6)',  // green-500
    dark: 'rgba(17, 119, 54, 0.6)',   // green-600
    borderLight: 'rgba(34, 197, 94, 1)',
    borderDark: 'rgba(22, 163, 74, 1)'
  };

  const chartData = {
    ...data,
    datasets: [
      {
        ...data.datasets[0],
        backgroundColor: greenPalette.light,
        borderColor: greenPalette.borderLight,
        borderRadius: 8,
        borderWidth: 1,
      },
      {
        ...data.datasets[1],
        backgroundColor: greenPalette.dark,
        borderColor: greenPalette.borderDark,
        borderRadius: 8,
        borderWidth: 1,
      }
    ]
  };

  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            size: 16,
            weight: 'bold'
          },
          padding: 20
        }
      },
      title: {
        display: true,
        font: {
          size: 24
        },
        text: 'Emissions by Source (2022-2023)',
      },
      datalabels: {
        color: '#4B5563',
        anchor: 'end',
        align: 'end',
        offset: 4,
        font: {
          weight: 'bold',
          size: 12
        },
        formatter: function(value) {
          return value;
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
          drawBorder: false
        },
        title: {
          display: true,
          text: 'Emissions Value',
        },
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          padding: 5
        }
      }
    }
  };

  return (
    <div className="w-full h-full">
      <Bar data={chartData} options={options} plugins={[ChartDataLabels]} />
    </div>
  );
};

export default HorizontalBarChart;