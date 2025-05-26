import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const VerticalBarChart = ({ data }) => {
  const greenPalette = {
    light: 'rgba(34, 197, 94, 0.6)',  // green-500
    dark: 'rgba(22, 163, 74, 0.6)',   // green-600
    borderLight: 'rgba(34, 197, 94, 1)',
    borderDark: 'rgba(22, 163, 74, 1)'
  };

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        ...data.datasets[0],
        backgroundColor: greenPalette.light,
        borderColor: greenPalette.borderLight,
        borderRadius: 4,
        borderWidth: 1,
        type: 'bar'
      }
    ]
  };

  const options = {
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        align: 'center',
        labels: {
          font: {
            size: 12,
            weight: 'bold'
          },
          padding: 10,
          boxWidth: 12,
          boxHeight: 12
        }
      },  
      title: {
        display: true,
        text: "GHG Emissions Performance (21-22)",
        font: {
          size: 17
        },
        padding: {
          top: 30,
          bottom: 30
        }
      },
      datalabels: {
        color: '#4B5563',
        anchor: 'end',
        align: 'top',
        offset: 0,
        font: {
          size: 12
        },
        formatter: function (value) {
          return value;
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
          drawBorder: false,
          borderDash: [5, 5]
        },
        ticks: {
          padding: 0
        }
      },
      x: {
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
          drawBorder: false,
          borderDash: [5, 5]
        },
        ticks: {
          padding: 0
        }
      }
    },
    datasets: {
      bar: {
        barThickness: 10,
        maxBarThickness: 10,
      }
    }
  };

  return (
    <div className="w-full h-[240px]">
      <Bar data={chartData} options={options} plugins={[ChartDataLabels]} />
    </div>
  );
};

export default VerticalBarChart; 