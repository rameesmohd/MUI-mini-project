import React from 'react'
import Paper from '@mui/material/Paper';
import { Grid, Typography,Box ,Rating ,createTheme,ThemeProvider} from '@mui/material';
import { AccessTime} from '@mui/icons-material'

const theme = createTheme({
    components : {
        MuiTypography : {
            variants : [
                {
                    props : {
                        variant : "body2"
                    },
                    style : {
                        fontSize : 11,
                    }
                },
                {
                    props : {
                        variant : "body3"
                    },
                    style : {
                        fontSize : 9,
                    },
                }
            ]
        }
    }
})


const TourCard = () => {
  return (
    <>
    <Grid item xs={4}>
        <ThemeProvider theme={theme}> 
        <Paper elevation={3} >
            <img 
            src="https://traveldudes.com/wp-content/uploads/2020/09/Kerala_Main.jpg" 
            alt=""
            className='img'
            style={{height : "9rem"}}
            />
        <Box paddingX={1}>
        <Typography variant='subtitle1'>
            Welcome to kerala
        </Typography>
        <Box sx={{display : "flex",alignItems : "center"}}>
            <AccessTime sx={{width : 12.5}}/>
            <Typography variant='body2' component="p" marginLeft={0.5}>
                    5 Hours
            </Typography>
        </Box>
        </Box>
        <Box sx={{display : "flex",alignItems : "center"}} marginTop={3}>
            <Rating name="read-only" value={4.5} precision={0.5} size='small' readOnly />
            <Typography variant='body2' component="p" marginLeft={0.5}>
                4.5 
            </Typography>
            <Typography variant='body2' component="p" marginLeft={1.5}>
                (655 reviews)
            </Typography>
        </Box>
            <Typography variant='h6' component="h3" marginLeft={0.5}>
                From C $147
            </Typography>
        </Paper>
        </ThemeProvider>
    </Grid>
    </>
  )
}

export default TourCard
