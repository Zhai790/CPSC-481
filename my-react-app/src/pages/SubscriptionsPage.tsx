import "/src/pages/css_files/SubscriptionsPage.css";

const SubscriptionsPage = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="button-container">
          <button className="back-button">Back</button>
          <button className="help-button">Help</button>
        </div>
        
        <h1 className="header">Subscriptions</h1>
        
        <table className="subscription-table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Subscription Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Netflix</td>
              <td>Active (9.95$/month)</td>
            </tr>
            <tr>
              <td>Amazon Prime Video</td>
              <td className="inactive">Inactive <span className="subscribe-link">Subscribe?</span></td>
            </tr>
            <tr>
              <td>Disney+</td>
              <td>Active (6.95$/month)</td>
            </tr>
          </tbody>
        </table>
        
        <div className="payment-info">
          <p>Next Payment: Mar 28</p>
          <p>Current Cost: 16.90$</p>
        </div>
        
        <button className="payment-button">Change Payment Method</button>
      </div>
    </div>
  );
};

export default SubscriptionsPage;