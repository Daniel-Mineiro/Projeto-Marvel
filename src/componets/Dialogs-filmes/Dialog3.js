import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import './Dialog.css'

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen} id="button">
        Ver Destaques
      </Button>
     
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description" 
        id="dialog"  
      >
        <Grid item xs={12} sm={6} md={3} >
           <CardMedia
        component="img"
        height="200"
        image='https://upload.wikimedia.org/wikipedia/pt/9/9f/Thor_Poster.jpg'
        alt="green iguana"
      
      />
      </Grid>
      
        <DialogTitle id="alert-dialog-title">
          {"Thor"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Lorem ipsum dolor sit amet. Ea dolorem vero quo eligendi provident qui consequatur amet. Et obcaecati iusto in quos voluptas est iste aspernatur eum nemo expedita eos voluptatibus dolorum.
          </DialogContentText>
          <Typography gutterBottom variant="h6" component="div" >
          Avaliações 
        </Typography>
        <Rating name="size-small" defaultValue={4} size="small" />
       
        </DialogContent>
        
      </Dialog>
      
    </div>
  );
}