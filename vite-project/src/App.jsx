import { Container ,Grid} from '@mui/material'
import './App.css'
import TourCard from './components/TourCard'
import Navbar from './components/AppBar'

function App() {

  return (
  <div className='App'>
  <Navbar/>
  <Container sx={{ marginY: '20px' }}>
    <Grid container spacing={5}>
     {[...Array(4)].map(()=><TourCard/>)}
    </Grid>
  </Container>
  </div>
  )
}

export default App
