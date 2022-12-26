import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Cards from './Cards'
import Pagination from './Pagination'
import LeftDropdown from './LeftDropdown'
import LeftSideCard from './LeftSideCard'



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  



function screen1() {
  return (
    <>
    <Grid container spacing={10} sx={{mt:1, p:8}}>
        <Grid item xs={12}  sm={4} md={3}>
            <Item>xs=4</Item>
            <LeftDropdown/>
            <LeftSideCard children={'https://pbs.twimg.com/media/D72NbbAXoAAvFhu.jpg'}/>
            <LeftSideCard children={'https://i.pinimg.com/originals/a1/16/b7/a116b7f465a4ef481db6174a38b2383b.png'}/>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
            <Cards/>
            <Pagination/>
        </Grid>
       
    </Grid>
    
    </>
  )
}

export default screen1