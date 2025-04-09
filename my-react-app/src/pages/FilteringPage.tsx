import "/src/pages/css_files/FilteringPage.css";
import { useNavigate } from 'react-router-dom';

const ContentFilteringPage = () => {
  const navigate = useNavigate();


  const handleHelpButtonClick = () => {
    alert("This page allows you to configure content filtering settings.");
  };

  const handleFilterClick = (filterName: string) => {
    alert(`You clicked on: ${filterName}`);
  };

  const handleSmartFilterClick = () => {
    navigate('/smartfilter');
  };

  return (
    <div className="filtering-page">
      <div className="filter-container">
        <button onClick={handleHelpButtonClick} className="button">Help</button>
        
        <h1 className="header">Content Filtering Settings</h1>
        
        <div className="filter-table">
          <div className="filter-row">
            <div className="filter-item" onClick={() => handleFilterClick("Filter App Specific Content")}>
              Filter App Specific Content
            </div>
            <div className="filter-item" onClick={() => handleFilterClick("Filter By Age-Restriction")}>
              Filter By Age-Restriction
            </div>
          </div>
          <div className="filter-row">
            <div className="filter-item" onClick={handleSmartFilterClick}>
              SmartFilter
            </div>
            <div className="filter-item" onClick={() => handleFilterClick("Current Filters")}>
              Current Filters
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentFilteringPage;
