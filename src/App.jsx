import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import emissionsData from './data/data.json';
import HorizontalBarChart from './components/charts/HorizontalBarChart';
import VerticalBarChart from './components/charts/VerticalBarChart';
import PieChart from './components/charts/PieChart';
import LineChart from './components/charts/LineChart';
import EmployeeTable from './components/charts/EmployeeTable';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function App() {
  const metrics = [
    { key: 'Total Emissions', value: emissionsData.totalEmissions.value, reduced: emissionsData.totalEmissions.reduced },
    { key: 'GHG Performance', value: emissionsData.ghgPerformance.value, reduced: emissionsData.ghgPerformance.reduced },
    { key: 'Core Indicator', value: emissionsData.coreIndicatorPerformance.value, reduced: emissionsData.coreIndicatorPerformance.reduced },
    { key: 'GHG Values', value: emissionsData.ghgPerformanceValues.value, reduced: emissionsData.ghgPerformanceValues.reduced }
  ];

  // Prepare data for the vertical bar chart
  const verticalChartData = {
    labels: Object.keys(emissionsData.ghgEmissionsPerformance),
    datasets: [{
      label: 'GHG Emissions Performance',
      data: Object.values(emissionsData.ghgEmissionsPerformance),
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    }],
  };

  // Prepare data for the horizontal bar chart
  const sources = Object.keys(emissionsData.emissionsBySource['2022']);
  const horizontalChartData = {
    labels: sources,
    datasets: [
      {
        label: '2022',      
        data: sources.map(source => emissionsData.emissionsBySource['2022'][source]),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: '2023',
        data: sources.map(source => emissionsData.emissionsBySource['2023'][source]),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      }
    ],
  };

  // Prepare data for the pie chart
  const pieChartData = {
    labels: Object.keys(emissionsData.totalEmissionsByScope),
    datasets: [{
      data: Object.values(emissionsData.totalEmissionsByScope),
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
    }],
  };

  return (
    <div className=" bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-emerald-100 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="max-w-3xl mx-auto py-3 text-center">
          <h1 className="text-2xl font-bold text-emerald-800">GHG Emissions Dashboard</h1>
          <p className="text-emerald-600 mt-1">Environmental Performance Overview</p>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8 h-full pb-8">
        {/* First Row - Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gray-100 rounded-xl p-6 shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]">
            <h3 className="text-lg font-medium text-gray-500">Total Emissions</h3>
            <p className="text-2xl font-bold text-gray-800 mt-2">
              {emissionsData.totalEmissions.value.toLocaleString()}
            </p>
            <span className={`text-lg ${emissionsData.totalEmissions.reduced ? 'text-green-500' : 'text-red-500'}`}>
              {emissionsData.totalEmissions.reduced ? '↓ Reduced' : '↑ Increased'}
            </span>
          </div>
          <div className="bg-gray-100 rounded-xl p-6 shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]">
            <h3 className="text-lg font-medium text-gray-500">GHG Performance</h3>
            <p className="text-2xl font-bold text-gray-800 mt-2">
              {(emissionsData.ghgPerformance.value * 100).toFixed(1)}%
            </p>
            <span className={`text-lg ${emissionsData.ghgPerformance.reduced ? 'text-green-500' : 'text-red-500'}`}>
              {emissionsData.ghgPerformance.reduced ? '↓ Reduced' : '↑ Increased'}
            </span>
          </div>
          <div className="bg-gray-100 rounded-xl p-6 shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]">
            <h3 className="text-lg font-medium text-gray-500">Core Indicator</h3>
            <p className="text-2xl font-bold text-gray-800 mt-2">
              {(emissionsData.coreIndicatorPerformance.value * 100).toFixed(1)}%
            </p>
            <span className={`text-lg ${emissionsData.coreIndicatorPerformance.reduced ? 'text-green-500' : 'text-red-500'}`}>
              {emissionsData.coreIndicatorPerformance.reduced ? '↓ Reduced' : '↑ Increased'}
            </span>
          </div>
          <div className="bg-gray-100 rounded-xl p-6 shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]">
            <h3 className="text-lg font-medium text-gray-500">GHG Performance Values</h3>
            <p className="text-2xl font-bold text-gray-800 mt-2">
              {(emissionsData.ghgPerformanceValues.value * 100).toFixed(1)}%
            </p>
            <span className={`text-lg ${emissionsData.ghgPerformanceValues.reduced ? 'text-green-500' : 'text-red-500'}`}>
              {emissionsData.ghgPerformanceValues.reduced ? '↓ Reduced' : '↑ Increased'}
            </span>
          </div>
        </div>

        {/* Second Row - Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full max-h-100">
          {/* Left side - Horizontal Bar Chart */}
          <div className="bg-gray-100 rounded-xl p-6 shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] h-full max-h-100">
            <HorizontalBarChart data={horizontalChartData} />
          </div>

          <div className="grid grid-rows-2 gap-8 v-screen h-full max-h-100">
            {/* Top row - Vertical Bar Chart and Pie Chart */}
            <div className="grid grid-cols-2 gap-8 h-full max-h-30">
              <div className="bg-gray-100 rounded-xl p-6 shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] h-full max-h-100">
                <VerticalBarChart data={verticalChartData} />
              </div>
              <div className="bg-gray-100 rounded-xl p-6 shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] h-full max-h-80">
                <PieChart data={pieChartData} />
              </div>
            </div>
            {/* Bottom row - Line Chart and Employee Table */}
            <div className="grid grid-cols-2 gap-8 h-full max-h-30">
              <div className="bg-gray-100 rounded-xl p-6 shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] h-full max-h-80">
                <LineChart data={emissionsData.coreIndicatorScenario} />
              </div>
              <div className="bg-gray-100 rounded-xl p-6 shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] h-full max-h-80">
                <EmployeeTable data={emissionsData.employeeData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 