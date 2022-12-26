import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function NavbarSecond() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: '#f66tt6' }} display="flex" justifyContent="center" >
      <Tabs value={value} onChange={handleChange} sx={{}}   variant="scrollable" scrollButtons={false} centered>
        <Tab label="PLANNING TOOLS" />
        <Tab label="WEDDING VENUES" />
        <Tab label="GROOMS" />
        <Tab label="BRIDE" />
        <Tab label="WEDDING VENDORS" />
        <Tab label="BLOGS" />
        <Tab label="COMMUNITY" />
      </Tabs>
    </Box>
  );
}
