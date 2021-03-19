import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
   breakpoints: {
     values: {
       xs: 0,
       sm: 445,
       md: 960,
       lg: 1280,
       xl: 1920,
     },
   },
    shape: {
       borderRadius: 5 
    },
    typography: {
     "fontFamily": `"Raleway", "Roboto", "Helvetica", "Arial", sans-serif`,
     "fontSize": 14,
     "fontWeightLight": 300,
     "fontWeightRegular": 400,
     "fontWeightMedium": 500,
     "fontWeightBold": 800,
     h1: {
        "fontFamily": `"Spartan", "Roboto", "Helvetica", "Arial", sans-serif`,
        "fontSize": "3rem",
        "fontWeight": 800,
     },
     h2: {
        fontFamily: `"Spartan", "Roboto", "Helvetica", "Arial", sans-serif`,
        fontSize: "2.5rem",
        fontWeight: 800,
     },
     h3: {
        fontFamily: `"Spartan", "Roboto", "Helvetica", "Arial", sans-serif`,
        fontSize: "2rem",
        fontWeight: 800,
     },
     h4: {
        fontFamily: `"Spartan", "Roboto", "Helvetica", "Arial", sans-serif`,
        fontSize: "1.75rem",
        fontWeight: 800,
     },
     h5: {
        fontFamily: `"Spartan", "Roboto", "Helvetica", "Arial", sans-serif`,
        fontSize: "1.5rem",
        fontWeight: 800,
     },
     h6: {
        fontFamily: `"Spartan", "Roboto", "Helvetica", "Arial", sans-serif`,
        fontSize: "0.9rem",
        fontWeight: 800,
     },
     subtitle1: {
        fontFamily: `"Spartan", "Roboto", "Helvetica", "Arial", sans-serif`,
        fontSize: "0.85rem",
        fontWeight: 500,
     },
     subtitle2: {
        fontFamily: `"Spartan", "Roboto", "Helvetica", "Arial", sans-serif`,
        fontSize: "0.75rem",
        fontWeight: 500,
     },
     button: {
        fontFamily: `"Spartan", "Roboto", "Helvetica", "Arial", sans-serif`,
        fontWeight: 800,
        textTransform: "none",
        fontSize: "1.1rem",
     }
    },
    palette: {
        primary: {main: '#135e83'},
        secondary: {main: '#00c4cc'},
        tertiary: {main: '#bcffff'},
        white: {main: '#fff'},
    }
});