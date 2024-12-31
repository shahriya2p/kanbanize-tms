import React from 'react';
import { Box } from '@mui/material';
import NavBar from '../Navbar';
import SideBar from '../SideBar';

interface LayoutProps {
  children: React.ReactNode;
  darkMode: boolean;
  handleThemeChange: () => void;
  onLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, darkMode, handleThemeChange,onLogout }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar darkMode={darkMode} handleThemeChange={handleThemeChange} onLogout ={onLogout} />
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
