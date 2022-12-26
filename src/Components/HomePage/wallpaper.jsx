import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Search from './Search';
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';





const itemData = [
    {
      img: 'https://i.pinimg.com/originals/78/bf/fe/78bffe4e4cb0a6484d658eb0894947e0.jpg',
      title: 'Breakfast',
    },
  ];

function wallpaper() {
  return (
    <>
    <ImageList  cols={1} rowHeight={480}>
  {itemData.map((item) => (
    <Card key={item.img}>
       <CardMedia
          component="img"
          alt="green iguana"
          height="540"
          src={item.img}
        />
      {/* <Box >
        <Search children={'60%'} title={'Search for'}/>
        <Search children={'75%'} title={'In Where'}/>
      </Box>
      <Button  sx={{ width: 70, height:52, position: 'absolute', top: 200, left: '90%', zIndex: 'tooltip' }} variant="contained" color="error">FIND</Button> */}
    </Card>
  ))}
</ImageList>
    </>
  )
}

export default wallpaper