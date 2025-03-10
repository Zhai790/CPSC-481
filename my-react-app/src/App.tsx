import { Box } from '@mui/material';
import Remote from './features/remote/components/Remote';
import TVScreen from './features/tv/components/TVScreen';

function App() {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
    {/* Left Column: Remote UI */}
    <Box
      sx={{
        flex: 1,
        borderRight: '1px solid #ccc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Remote />
    </Box>

    {/* Right Column: TV Screen UI */}
    <Box
      sx={{
        flex: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TVScreen />
    </Box>
  </Box>
  );
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )

export default App
