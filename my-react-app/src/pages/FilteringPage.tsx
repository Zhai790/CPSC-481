import "/src/pages/css_files/FilteringPage.css";

const ContentFilteringPage = () => {

  const handleHelpButtonClick = () => {
    alert("This page allows you to configure content filtering settings.");
  };

  const handleFilterClick = (filterName: string) => {
    alert(`You clicked on: ${filterName}`);
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
            <div className="filter-item" onClick={() => handleFilterClick("Filter By Content-Type")}>
              Filter By Content-Type
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
