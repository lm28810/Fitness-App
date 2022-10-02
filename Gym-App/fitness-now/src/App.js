import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { Footer, Navbar, } from './Components/index';
import { Home, ExerciseDetails  } from './pages/index';
import './App.css';

const App = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetails />} />
    </Routes>
    <Footer />
  </Box>
);
  
    
  


export default App;
