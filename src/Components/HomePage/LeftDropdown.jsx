import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import Divider from '@mui/material/Divider';


export default function FileSystemNavigator() {
  return (
    <>
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 240, maxWidth: 400, color:"text.secondary"}}
    >
      <TreeItem nodeId="1" label="Category" sx={{mt:5}}>
        <TreeItem nodeId="2" label="Wedding Venues" sx={{mt:2}} />
        <TreeItem nodeId="2" label="Wedding Vendors" sx={{mt:2}} />
      </TreeItem>
      <Divider sx={{mt:3}}/>

      <TreeItem nodeId="2" label="Brides" sx={{mt:3}}>
        <TreeItem nodeId="10" label="Grooms" sx={{mt:2}} />
        <TreeItem nodeId="10" label="Bridal Makeover" sx={{mt:2}} />
      </TreeItem>
      <Divider sx={{mt:3}}/>

      <TreeItem nodeId="3" label="Jewellary" sx={{mt:3}}>
        <TreeItem nodeId="2" label="Clothings" sx={{mt:2}} />
      </TreeItem>
      <Divider sx={{mt:3}}/>

      <TreeItem nodeId="4" label="Location" sx={{mt:3}}>
        <TreeItem nodeId="10" label="Events" sx={{mt:2}} />
      </TreeItem>
      <Divider sx={{mt:3}}/>
    </TreeView>
    
    </>
  );
}
