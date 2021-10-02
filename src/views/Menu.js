import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Menu.css'



const theme = createTheme();

const Menu = () => {
  return (
    <ThemeProvider theme={theme}>
    <Grid component="main" sx={{ height: '500px' }}>
      <Grid item xs={12} sm={8} md={5}  elevation={6}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1,width: 130, height: 50 }} src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-0-1536x1536.png"  variant="rounded"/>
          <Typography component="h1" variant="h4" id="topo" >
    Bem vindo(a)  de volta!
          </Typography>
          <Typography component="h1" variant="h6" id="topo1">
    Acesse sua conta:
          </Typography>
          
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
            
              margin="normal"
              required
              fullWidth
              id="email"
              label="Usuário"
              name="email"
              autoComplete="email"
              variant="filled"
          
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              variant="filled"
            />
             <Grid container>
               <Grid item xs>
            <FormControlLabel
              control={<Checkbox size="small" sx={{color: 'red'}} />}
              label="Salvar login"
              id="check"
              
            />
            </Grid>
            <Grid item>
                <Link href="#" id="senha">
                  {"Esqueci a senha"}
                </Link>
              </Grid>
              </Grid>
            <Button
              type="submit"
              fullWidth
             
              sx={{ mt: 3, mb: 2 }}
              id="botao_entrar"
              href="/personagem"
            >
            Entrar
            </Button>
         
                
                <Link href="#" variant="body2" underline="none" class="cadastro1" >
                 Ainda não tem login?
                </Link>
                <Link href="#" variant="body2" class="cadastro2">
                 Cadastra-se
                </Link>
             
          </Box>
        </Box>
      </Grid>
     
    </Grid>
    
  </ThemeProvider>
  
 
  );
}

export default Menu;