import React from 'react';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const PieChart = ({ data }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        align: 'left',
        labels: {
          font: {
            size: 14,
            weight: 'bold'
          },
          padding: 7,
          boxWidth: 7,
          boxHeight: 7
        }
      },
      title: {
        display: true,
        font: {
          size: 17
        },
        text: 'Total Emissions by Scope',
      },
      datalabels: {
        color: '#222',
        font: {
          weight: 'bold',
          size: 14
        },
        formatter: function(value, context) {
          const total = context.dataset.data.reduce((a, b) => a + b, 0);
          const percentage = ((value / total) * 100).toFixed(1);
          return `${percentage}%`;
        }
      }
    }
  };

  return (
    <div className="w-full h-[280px] relative">
      <div className="absolute inset-0">
        <Pie data={data} options={options} plugins={[ChartDataLabels]} />
      </div>
    </div>
  );
};

export default PieChart; 