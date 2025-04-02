import { useNavigate } from 'react-router-dom';
import "/src/pages/css_files/SubscriptionsPage.css";

const SubscriptionsPage = () => {

  const navigate = useNavigate();

  //navigation logic for the back button
  const handleBackButtonClick = () => {
    navigate('/settings'); //navigate to the Welcome page
  };

  // navigation logic for the help button
  const handleHelpButtonClick = () => {
    alert("This is the subscriptions page. You can configure your subscription settings here.");
  };

  const handlePaymentMethodClick = () => {
    alert("Payment Method settings will be here.");
  };

  return (
    <div className="subscriptions-page">
      <div className="container">
        <div className="content">
          <div className="button-container">
            <button onClick={handleBackButtonClick} className="back-button">Back</button>
            <button onClick={handleHelpButtonClick} className="help-button">Help</button>
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
          
          <button onClick={handlePaymentMethodClick} className="payment-button">Change Payment Method</button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionsPage;