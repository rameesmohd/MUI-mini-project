import React from 'react'
import { Container ,Grid} from '@mui/material'
import TourCard from '../components/TourCard'

const Home = () => {
  return (
    <>
    <Container sx={{ marginY: '20px' }}>
        <Grid container spacing={5}>
        {[...Array(4)].map(()=><TourCard/>)}
        </Grid>
    </Container>
    </>
  )
}

export default Home
