import { Box, Container, Typography ,Paper, BottomNavigation} from '@mui/material'
import React from 'react'
import ImageCollage from '../components/ImageCollage'
import ControlledAccordions from '../components/Accordian'
import Modal from '../components/Modal'

const About = () => {
  return (
    <Container sx={{width : 900}}>
        <Typography variant='h3' component="h1" marginTop={3}>
            Explore the world
        </Typography>
        <Box marginTop={3} sx={{display : "flex"}}>
            <img 
            src="https://www.hindustantimes.com/ht-img/img/2023/10/28/550x309/abhishek-prasad-ii0oWs5abCo-unsplash_1698471130328_1698471139003.jpg" 
            alt=""
            height={325}
            />
        <ImageCollage/>
        </Box>
        <Box>
        <Typography variant='h6' component="h4" marginTop={3}> 
            About the tickets
        </Typography>
        <Typography variant='paragraph' component="p" marginTop={3}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque alias autem rem, veritatis itaque molestias, eveniet aliquid rerum nemo hic eaque a quos totam nam porro laboriosam neque perspiciatis commodi. Quibusdam blanditiis atque quas porro rem quisquam nulla architecto repellat!
        </Typography>
        </Box>
        <Box marginBottom={10}>
        <Typography variant='h6' component="h4" marginY={3} > 
            Frequently asked questions
        </Typography>
        </Box>
        <ControlledAccordions/>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation> <Modal/> </BottomNavigation>
      </Paper>
    </Container>
  )
}

export default About
