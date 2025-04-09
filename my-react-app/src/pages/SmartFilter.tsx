import { useState } from 'react';

const AutofilterPage = () => {
  // State for enabling the autofilter
  const [isAutofilterEnabled, setIsAutofilterEnabled] = useState(false);

  // State for each content filter
  const [filters, setFilters] = useState({
    sexualScenes: false,
    foulLanguage: false,
    excessiveViolence: false,
    harmfulToDevelopment: false,
  });

  // Handle toggle for autofilter
  const handleAutofilterToggle = () => {
    setIsAutofilterEnabled(!isAutofilterEnabled);
  };

  // Handle individual filter toggle, specify type for 'filter'
  const handleFilterToggle = (filter: keyof typeof filters) => {
    setFilters({
      ...filters,
      [filter]: !filters[filter],
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Autofilter</h1>
      
      {/* Enable Autofilter section */}
      <div style={{ marginBottom: '20px' }}>
        <span>Enable Autofilter</span>
        <button
          onClick={handleAutofilterToggle}
          style={{
            marginLeft: '10px',
            padding: '10px',
            backgroundColor: isAutofilterEnabled ? 'green' : 'red',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {isAutofilterEnabled ? 'ON' : 'OFF'}
        </button>
      </div>

      {/* List of content filters */}
      <div>
        {(['sexualScenes', 'foulLanguage', 'excessiveViolence', 'harmfulToDevelopment'] as const).map((filter) => (
          <div
            key={filter}
            style={{
              marginBottom: '10px',
              opacity: isAutofilterEnabled ? 1 : 0.5, // Grey out if autofilter is off
              pointerEvents: isAutofilterEnabled ? 'auto' : 'none', // Disable interactions when off
            }}
          >
            <span style={{ marginRight: '10px' }}>
              {filter === 'sexualScenes' && 'Block content detected to contain sexual scenes'}
              {filter === 'foulLanguage' && 'Block content detected to contain foul language'}
              {filter === 'excessiveViolence' && 'Block content detected to contain excessive violence'}
              {filter === 'harmfulToDevelopment' && 'Block content detected to be harmful to development in children'}
            </span>
            <button
              onClick={() => handleFilterToggle(filter)} // No need for type casting here anymore
              style={{
                padding: '5px 10px',
                backgroundColor: filters[filter] ? 'green' : 'red',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {filters[filter] ? 'Enabled' : 'Disabled'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutofilterPage;
