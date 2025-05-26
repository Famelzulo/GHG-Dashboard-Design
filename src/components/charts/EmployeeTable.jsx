import React from 'react';

const EmployeeTable = ({ data }) => {
  const years = Object.keys(data).sort();
  
  return (
    <div className="w-full h-full max-h-40">
      <h3 className="text-lg font-bold text-gray-800 mb-2">Core Indicators - Employee Data</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Active</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">New Hires</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {years.map((year) => (
              <tr key={year} className="hover:bg-gray-50">
                <td className="px-3 py-2 whitespace-nowrap text-xs font-medium text-gray-900">{year}</td>
                <td className="px-3 py-2 whitespace-nowrap text-xs text-gray-500">{data[year].totalEmployees.toLocaleString()}</td>
                <td className="px-3 py-2 whitespace-nowrap text-xs text-gray-500">{data[year].activeEmployees.toLocaleString()}</td>
                <td className="px-3 py-2 whitespace-nowrap text-xs text-gray-500">{data[year].newHires.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeTable; 