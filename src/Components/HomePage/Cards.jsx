import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { experimentalStyled as styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Box } from "@mui/system";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";


const itemData = [
  {
    img: "https://img.freepik.com/free-vector/beautiful-blooming-flower-leaves-background_44538-2079.jpg?w=2000",

    title: "Breakfast",
    startingPrice: "2999",
    endPrice: "5999",
  },
  {
    img: "https://www.shutterstock.com/image-photo/beautiful-flowers-background-wedding-scene-260nw-324093323.jpg",
    title: "Breakfast",
    startingPrice: "7699",
    endPrice: "14999",
  },

  {
    img: "https://img.freepik.com/free-vector/beautiful-blooming-flower-leaves-background_44538-2079.jpg?w=2000",
    title: "Breakfast",
    startingPrice: "62999",
    endPrice: "87000",
  },
  {
    img: "https://wallpaperaccess.com/full/4055163.jpg",
    title: "Breakfast",
    startingPrice: "1999",
    endPrice: "8999",
  },
  {
    img: "https://wallpaperaccess.com/full/4055163.jpg",
    title: "Breakfast",
    startingPrice: "5499",
    endPrice: "12999",
  },
  {
    img: "https://www.shutterstock.com/image-photo/beautiful-flowers-background-wedding-scene-260nw-324093323.jpg",
    title: "Breakfast",
    startingPrice: "7699",
    endPrice: "14999",
  },
  {
    img: "https://img.freepik.com/free-vector/beautiful-blooming-flower-leaves-background_44538-2079.jpg?w=2000",
    title: "Breakfast",
    startingPrice: "62999",
    endPrice: "87000",
  },
  {
    img: "https://wallpaperaccess.com/full/4055163.jpg",
    title: "Breakfast",
    startingPrice: "1999",
    endPrice: "8999",
  },
  {
    img: "https://img.freepik.com/free-vector/beautiful-blooming-flower-leaves-background_44538-2079.jpg?w=2000",
    title: "Breakfast",
    startingPrice: "62999",
    endPrice: "87000",
  },
];

export default function ImgMediaCard() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[500]),
    borderBlockColor: red[500],
    color: "red",
    "&:hover": {
      backgroundColor: red[700],
      color: "white",
    },
  }));

  const navigate = useNavigate()
  const handlePage =()=>{
    navigate('/detailPage/:serviceId')
  }

  return (
    <>
    <motion.div
        className="motions"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
      >
      <Grid
        container
        spacing={{ xs: 2, md: 3, lg: 5 }}
        columns={{ xs: 2, sm: 4, md: 8, lg: 12 }}
      >
        {itemData.map((item) => (
           
          <Grid item xs={2} sm={4} md={4}>
            
            <Card sx={{ borderRadius: "3%" }} onClick={()=>handlePage()}>
            <motion.button
           whileHover={{ scale: 1.2 }}
           whileTap={{ scale: 5 }}
           transition={{ duration: .8 }}
         >
              <CardMedia
                component="img"
                alt="green"
                height="200"
                src={item.img}
                
              />
            </motion.button>

              <CardContent>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Ambara suits
                </Typography>
                <Typography variant="body2" color="text.secondary">
                requires a valid value to be accessible. Provide a valid, navigable address as the href value.
                </Typography>
                <Box sx={{ display: "flex", mt: 2 }}>
                  <Typography color="text.secondary" sx={{ display: "flex" }}>
                    <CurrencyRupeeIcon sx={{ width: "16px" }} />
                    {item.startingPrice}
                  </Typography>
                  <Typography sx={{ mx: 1, ml: 1 }}>-</Typography>
                  <Typography color="text.secondary" sx={{ display: "flex" }}>
                    <CurrencyRupeeIcon sx={{ width: "16px" }} />
                    {item.endPrice}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions>
                <ColorButton variant="outlined" sx={{ width: "100%", m: 2 }}>
                  Request Pricing
                </ColorButton>
              </CardActions>
            </Card>
          </Grid>
         
        ))}
      </Grid>
      </motion.div>
    </>
  );
}
