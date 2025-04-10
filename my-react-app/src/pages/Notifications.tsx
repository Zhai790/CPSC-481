import "/src/pages/css_files/Notifications.css";

const notifications = [
  { date: "4/8/25", message: "New Time Limit Has Been Set" },
  { date: "4/8/25", message: "Child has reached daily screen time limit" },
];

const NotificationsPage = () => {


  return (
    <div className="notifications-holder">
    <div className="notifications-page">

      <h1 className="notifications-header">Notifications</h1>

      <div className="notifications-container">
        {notifications.map((note, index) => (
          <div key={index} className="notification-entry">
            <div className="notification-date">{note.date}</div>
            <div className="notification-message">{note.message}</div>
          </div>
        ))}
        <div className="down-arrow">⬇</div>
      </div>
      <button className="help-button">Help</button>
    </div>
    </div>
  );
};

export default NotificationsPage;
