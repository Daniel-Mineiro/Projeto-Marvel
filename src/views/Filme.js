import './Filme.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';


import Stack from '@mui/material/Stack';


import Dialog from '../componets/Dialogs-filmes/Dialog'
import Dialog2 from '../componets/Dialogs-filmes/Dialog2'
import Dialog3 from '../componets/Dialogs-filmes/Dialog3'
import Select from  '../componets/Select'

const theme = createTheme();

const Filme = () => {
  return (
    <ThemeProvider theme={theme}>

      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static" class="toolbar">
          <Toolbar>
            <Avatar sx={{ m: 1, width: 110, height: 50 }} src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-0-1536x1536.png" variant="rounded" />

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Stack direction="row" spacing={2}>
                <Button size="small" color="error" href="/personagem">Personagem</Button>

                <Button
                  size="small"
                  href="/filmes"
                  color="error"
                >
                  Filmes
                </Button>
                <Button
                  size="small"
                  href="/hqs"
                  color="error"
                >
                  HQs
                </Button>

                <Button >
                  <Avatar
                    src="data:image/png;base64,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"
                    sx={{ width: 30, height: 30 }}
                  />
                </Button>
                <Button
                  size="small"
                  href="/"
                  color="error"
                >
                  Sair
                </Button>
              </Stack>
            </Box>

          </Toolbar>
        </AppBar>


      </Box>

      <Container sx={{ py: 5 }} maxWidth="md">
      <Select id="select"/>
        {/* End hero unit */}
        <Grid container spacing={5}>
          
            <Grid item xs={12} sm={6} md={4} >
                 <Card sx={{ height: 400, width: 250 }}  id="card-1">
      
      <CardContent id="card">
        <Typography gutterBottom variant="h5" component="div" color="white">
        Homem de ferro
        </Typography>
        <Typography variant="body2" color="white">
        Lorem ipsum dolor sit amet. Ea dolorem vero quo eligendi provident qui consequatur amet. Et obcaecati iusto in 

        </Typography>
      </CardContent>
     <Dialog/>
    </Card>
             
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
          
    <Card sx={{ height: 400, width: 250 }}  id="card-2">
      
      <CardContent id="card">
        <Typography gutterBottom variant="h5" component="div" color="white">
       Homem de Ferro 2
        </Typography>
        <Typography variant="body2" color="white">
        Lorem ipsum dolor sit amet. Ea dolorem vero quo eligendi provident qui consequatur amet. Et obcaecati iusto in 

        </Typography>
      </CardContent>
     <Dialog2/>
    </Card>
             
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                   <Card sx={{ height: 400, width: 250 }}  id="card-3">
      
      <CardContent id="card">
        <Typography gutterBottom variant="h5" component="div" color="white">
        Thor
        </Typography>
        <Typography variant="body2" color="white">
        Lorem ipsum dolor sit amet. Ea dolorem vero quo eligendi provident qui consequatur amet. Et obcaecati iusto in 

        </Typography>
      </CardContent>
     <Dialog3/>
    </Card>
             
            </Grid>
      
        </Grid>
      </Container>

    </ThemeProvider>


  );
}

export default Filme;
