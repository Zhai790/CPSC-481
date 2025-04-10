import "/src/pages/css_files/ParentHome.css";
import { useNavigate } from 'react-router-dom';
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts"; // ✅ Make sure this is imported!

const ParentHome = () => {
  const navigate = useNavigate();

  const handleSettingsButtonClick = () => {
    navigate('/settings');
  };

  const handleInsightsButtonClick = () => {
    navigate('/insights');
  };

  const handleNotificationsButtonClick = () => {
    navigate('/notifications');
  };

  const series = [
    {
      name: "Watch Time",
      data: [45, 60, 30, 75, 90],
    }
  ];

  // ✅ Correctly typed options
  const options: ApexOptions = {
    chart: {
      id: "watch-time-chart",
      type: "line", // must be exact literal
      toolbar: { show: false },
      foreColor: '#ffffff' // makes all default text white
    },
    xaxis: {
      categories: ["28/03/25", "29/03/25", "30/03/25", "31/03/25", "01/04/25"],
      title: {
        text: "Date",
        style: { color: '#ffffff' }
      }
    },
    yaxis: {
      title: {
        text: "Watch Time (minutes)",
        style: { color: '#ffffff' }
      }
    },
    stroke: {
      curve: "smooth"
    },
    tooltip: {
      theme: 'dark', // makes tooltip text black (default is 'dark')
      style: {
        fontSize: '14px'
      }
    },
    dataLabels: {
      enabled: false
    },
    title: {
      text: "Child's Watch Time Over Days",
      align: "center",
      style: { color: '#ffffff' }
    }
  };

  return (
    <div className="parent-home">
      <div className="page-container">
        <h1 className="welcome-message">Welcome Parent_Name</h1>

        <div className="chart-container">
          <ReactApexChart
            options={options}
            series={series}
            type="line" // ✅ also needs to be exact
            height={350}
          />
        </div>

        <div className="button-container">
          <button onClick={handleInsightsButtonClick} className="button">Insights</button>
          <button onClick={handleSettingsButtonClick} className="button">Settings</button>
          <button onClick={handleNotificationsButtonClick} className="button">Notifications</button>
        </div>
        <button className="help-button">Help</button>
      </div>
    </div>
  );
};

export default ParentHome;
