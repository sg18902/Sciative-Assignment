import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './ChartComponent.css'; 

const ChartComponent = () => {
  const [chartOptions, setChartOptions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://viaje.ai/mainvia_api/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const apiData = await response.json();
        console.log('API Data:', apiData); // Debugging

        const categories = apiData.data.map(item => item["0"]);
        const series1 = apiData.data.map(item => item["1"]);
        const series2 = apiData.data.map(item => item["2"]);
        const series3 = apiData.data.map(item => item["3"]);

        setChartOptions({
          chart: {
            type: 'column'
          },
          title: {
            text: '',
            align: 'left'
          },
          xAxis: {
            categories: categories,
            crosshair: true,
            accessibility: {
              description: 'Dates'
            }
          },
          yAxis: {
            min: 0,
            title: {
              text: 'Bookings'
            }
          },
          tooltip: {
            valueSuffix: ''
          },
          plotOptions: {
            column: {
              pointPadding: 0.2,
              borderWidth: 0
            }
          },
          series: [
            {
              name: 'Series 1',
              data: series1
            },
            {
              name: 'Series 2',
              data: series2
            },
            {
              name: 'Series 3',
              data: series3
            }
          ]
        });
        setLoading(false);
      } catch (error) {
        console.error('Fetch error:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div className="container">
      <div className="text-section">
        <h2>Review, export and publish copy</h2>
        <p>Simply provide our AI writer with 1-2 sentences on what to write, and it'll understand and start writing for you.</p>
        <ul>
          <li className="nav-list">Include any SEO keywords you want to rank for</li>
          <li className="nav-list">Customize your copy with tone and perspective options</li>
          <li className="nav-list">Choose from 25+ languages</li>
        </ul>
      </div>
      <div className="chart-section">
        {chartOptions && <HighchartsReact highcharts={Highcharts} options={chartOptions} />}
      </div>
    </div>
  );
};

export default ChartComponent;
