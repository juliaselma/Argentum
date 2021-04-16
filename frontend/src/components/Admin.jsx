
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import {Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Form from './FormAdd';
import Edit from './FormEdit'
import Delete from './Delete'



const useStyles = makeStyles((theme) => ({
  
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    display:'flex',
    justifyContent:'space-between'
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    width:'1400px',
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
    
  },
  
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    backgroundColor: "#C25500",
    width:'100%'
    
  },
}));



export default function Checkout() {
  const classes = useStyles();
  const [add ,showAdd] = React.useState("create")
  
  
  
  const createClick = ()=>{
    showAdd("create") 
  }
  const editClick = ()=>{
   showAdd("edit")
  }
  const deleteClick = ()=>{
  showAdd("delete")
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            ADMIN PRODUCTS
          </Typography>
          <Button
                    variant="contained"
                    color="inherit"
                    onClick={createClick}
                    className={classes.button}
                  >
                    Add Product 
                  </Button>
                  <Button
                    variant="contained"
                    color="inherit"
                    onClick={editClick}
                    className={classes.button}
                  >
                    Edit Product 
                  </Button>
                  <Button
                    variant="contained"
                    color="inherit"
                    onClick={deleteClick}
                    className={classes.button}
                  >
                    delete Product 
                  </Button>
                  
                  <Box mt={4} />
                 {add==='create'? <Form /> : null} 
                 {add==='edit'? <Edit /> : null} 
                 {add==='delete'? <Delete /> : null} 
                 <Link to='/admin' style={{textDecoration:'none',color:'black'}} >
                 <Button
                    variant="contained"
                    color="inherit"
                    className={classes.button}
                    
                  >
                    back to panel
                  </Button>
                  </Link>
        </Paper>
        
      </main>
    </React.Fragment>
  );
}




