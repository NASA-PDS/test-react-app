import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Typography as MuiTypography } from '@mui/material'
import { Chip as MuiChip } from '@mui/material';

import { HelloWorld } from 'test-package';
import { Loader } from 'test-package';
import { Chip } from 'test-package';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>MUI Components</h2>
        <MuiTypography variant='h1'>Test</MuiTypography>
        <MuiChip label="Test Chip from Material UI" />
        <br /><br />
        <h2>WDS-REACT COMPONENTS</h2>
        <HelloWorld />
        <Loader />
        <Chip label="Test Chip from wds-react" />
        <br /><br />
        <a href="https://vitejs.dev" target="_blank">
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
}

export default App
