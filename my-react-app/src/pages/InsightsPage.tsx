import '/src/pages/css_files/Insights.css';

const InsightsPage = () => {

  return (
    <div className="insights-page">
    <div className="container">


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
      <button className="help-button">Help</button>
    </div>
    </div>
  );
};


export default InsightsPage;
