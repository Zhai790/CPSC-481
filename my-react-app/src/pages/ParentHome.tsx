import "./ParentHome.css"; 

const ParentHome = () => {
    return (
      <div className="page-container">
      {/* Back Button */}
      <button className="back-button">Back</button>

      {/* Welcome message */}
      <h1 className="welcome-message">Welcome Parent_Name</h1>

      {/* Image Container */}
      <div className="image-container">
        <img src="./assets/360_F_130365758_ETX4W9NYSmhfO8NGnlaHmFkC1Q0osrSx.webp" alt="Main" className="image" />
      </div>

      {/* Buttons */}
      <div className="button-container">
        <button className="button">Button 1</button>
        <button className="button">Button 2</button>
        <button className="button">Button 3</button>
      </div>
    </div>
  );
};

  
  export default ParentHome;