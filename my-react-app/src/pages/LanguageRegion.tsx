import { useState } from 'react';
import "/src/pages/css_files/LanguageRegion.css";

const LanguageRegionPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const languages = [
    'English', 'French', 'Spanish', 'German', 'Mandarin', 'Hindi', 'Arabic',
    'Russian', 'Portuguese', 'Japanese', 'Korean', 'Italian', 'Dutch',
    'Swedish', 'Polish'
  ];

  const regions = [
    'United States', 'Canada', 'United Kingdom', 'France', 'Germany', 'India',
    'China', 'Japan', 'Brazil', 'Australia', 'Mexico', 'South Korea',
    'South Africa', 'Italy'
  ];

  return (
    <div className="page-cover">
    <div className="language-region-page">
      <h1 className="header">Language and Region</h1>

      <div className="dropdown-container">
        <label className="dropdown-label" htmlFor="language-select">Select Language</label>
        <select
          id="language-select"
          className="dropdown"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <option value="" disabled>Select a language</option>
          {languages.map((lang) => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
      </div>

      <div className="dropdown-container">
        <label className="dropdown-label" htmlFor="region-select">Select Region</label>
        <select
          id="region-select"
          className="dropdown"
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
        >
          <option value="" disabled>Select a region</option>
          {regions.map((region) => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>
      </div>
    </div>
    </div>
  );
};

export default LanguageRegionPage;
