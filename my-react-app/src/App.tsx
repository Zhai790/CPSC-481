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
}

export default App
