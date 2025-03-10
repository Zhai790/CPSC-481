import React from 'react';
import { useNavigate } from 'react-router-dom';

const InsightsPage = () => {
  const navigate = useNavigate();

  // Navigation logic for the back button
  const handleBackButtonClick = () => {
    navigate('/parent-home'); // Navigate to the parent-home page
  };

  //help button produces an alert message
  const handleHelpButtonClick = () => {
    alert("This page provides insights into viewing habits and content usage.");
  };

  return (
    <div style={containerStyle}>
      {/* Back Button */}
      <button onClick={handleBackButtonClick} style={{ ...buttonStyle, left: '20px' }}>
        Back
      </button>

      {/* Help Button */}
      <button onClick={handleHelpButtonClick} style={{ ...buttonStyle, right: '20px' }}>
        Help
      </button>

      {/* Header */}
      <h1 style={headerStyle}>Insights</h1>

      {/* Insights Table */}
      <table style={tableStyle}>
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
  );
};

// Styles for the component
const containerStyle: React.CSSProperties = {
  padding: '2rem',
  textAlign: 'center',
  position: 'relative',
};

const buttonStyle: React.CSSProperties = {
  position: 'absolute',
  top: '20px',
  padding: '0.6rem 1.2rem',
  fontSize: '1rem',
  backgroundColor: '#1a1a1a',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
};

const headerStyle: React.CSSProperties = {
  marginBottom: '2rem',
  fontSize: '2rem',
};

const tableStyle: React.CSSProperties = {
  width: '80%',
  margin: '0 auto',
  borderCollapse: 'collapse',
  textAlign: 'left',
  backgroundColor: '#fff',
  color: '#000',
};

export default InsightsPage;
