import { useNavigate } from 'react-router-dom';
import '/src/pages/css_files/Insights.css';

const InsightsPage = () => {
  const navigate = useNavigate();

  // navigation logic for the back button
  const handleBackButtonClick = () => {
    navigate('/parent-home'); 
  };

  //help button produces an alert message
  const handleHelpButtonClick = () => {
    alert("This page provides insights into viewing habits and content usage.");
  };

  return (
    <div className="insights-page">
    <div className="container">
      <button onClick={handleBackButtonClick} className="button">
        Back
      </button>

      <button onClick={handleHelpButtonClick} className="button">
        Help
      </button>

      <h1 className="header">Insights</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Most Used App</td>
            <td>YouTube Kids</td>
          </tr>
          <tr>
            <td>Most Watched Show/Channel</td>
            <td>Bluey</td>
          </tr>
          <tr>
            <td>Favorite Content Type</td>
            <td>Educational</td>
          </tr>
          <tr>
            <td>Total Monthly Watch Time</td>
            <td>45 hours</td>
          </tr>
          <tr>
            <td>Average Daily Watch Time (Last 30 Days)</td>
            <td>1.5 hours</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};


export default InsightsPage;
