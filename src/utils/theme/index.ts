import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#cfd8dc',
            // contrastText:"#212121"
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            // main: '#808080',
            main: '#263238',
            // contrastText : "#e0e0e0"            
        },
    },
});