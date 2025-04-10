import { useEffect, useState } from 'react';

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

  // ✅ Load saved filters from localStorage on first render
  useEffect(() => {
    const savedAutofilter = JSON.parse(localStorage.getItem('isAutofilterEnabled') || 'false');
    const savedFilters = JSON.parse(localStorage.getItem('filters') || '{}');

    setIsAutofilterEnabled(savedAutofilter);
    setFilters((prevFilters) => ({ ...prevFilters, ...savedFilters }));
  }, []);

  // Handle toggle for autofilter
  const handleAutofilterToggle = () => {
    const newValue = !isAutofilterEnabled;
    setIsAutofilterEnabled(newValue);
    localStorage.setItem('isAutofilterEnabled', JSON.stringify(newValue));
  };

  // Handle individual filter toggle
  const handleFilterToggle = (filter: keyof typeof filters) => {
    const updatedFilters = {
      ...filters,
      [filter]: !filters[filter],
    };
    setFilters(updatedFilters);
    localStorage.setItem('filters', JSON.stringify(updatedFilters));
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
              opacity: isAutofilterEnabled ? 1 : 0.5,
              pointerEvents: isAutofilterEnabled ? 'auto' : 'none',
            }}
          >
            <span style={{ marginRight: '10px' }}>
              {filter === 'sexualScenes' && 'Block content detected to contain sexual scenes'}
              {filter === 'foulLanguage' && 'Block content detected to contain foul language'}
              {filter === 'excessiveViolence' && 'Block content detected to contain excessive violence'}
              {filter === 'harmfulToDevelopment' && 'Block content detected to be harmful to development in children'}
            </span>
            <button
              onClick={() => handleFilterToggle(filter)}
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
