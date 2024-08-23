import React from 'react';
import DashboardLayout from './components/DashboardLayout';
import Charts from './components/Charts';
import useFetchData from './hooks/useFetchData';

const App = () => {
  const { data, loading, error } = useFetchData('https://api.example.com/data');

  // Fallback data if no API is provided
  const fallbackData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 2000 },
    { name: 'Apr', value: 2780 },
    { name: 'May', value: 1890 },
    { name: 'Jun', value: 2390 },
    { name: 'Jul', value: 3490 },
  ];

  return (
    <DashboardLayout>
      <h1>Interactive Dashboard</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching data</p>}
      <Charts data={data.length ? data : fallbackData} />
    </DashboardLayout>
  );
};

export default App;
