import React from 'react'
import  Box  from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import NavigationBar from './components/NavigationBar'
import Montage from "./pages/Montage";

const App = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <NavigationBar/>
      <Box sx={{ backgroundColor: "#eeeeee", maxHeight: "100vh", width: "100%" }}>  
        <Montage />
      </Box>
    </Box>
  )
}

export default App
