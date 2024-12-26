import React from 'react';
import { Box } from '@mui/material';
import NavBar from '../Navbar';
import SideBar from '../SideBar';

interface LayoutProps {
  children: React.ReactNode;
  darkMode: boolean;
  handleThemeChange: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, darkMode, handleThemeChange }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <SideBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
