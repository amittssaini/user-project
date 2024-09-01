import React from 'react'
import {Card,CardContent,Typography,CardActions,Button} from '@mui/material'
import { red } from '@mui/material/colors'
import axios from 'axios'
import {config} from '../App'
import { useNavigate } from 'react-router-dom'
import {  useSnackbar } from 'notistack'
const UserCard = ({firstName,lastName,id,email,department}) => {

    const {enqueueSnackbar} = useSnackbar();
    const navigate=useNavigate();
    const deletUser=async(id)=>{
        try {
            console.log('delete user function')
            console.log(id);
          const result = await axios.delete(`${config.endpoint}/${id}`)
          if(result.status===200)
               enqueueSnackbar("User is Deleted ",{variant:"success"})
            window.location.reload();

        } catch (error) {
            enqueueSnackbar("Something went wrong ",error,{variant:error})
        }
    }
  return (
    <>
     <Card sx={{ minWidth: 275 ,minHeight:200}}>
      <CardContent>
        
        <Typography variant="h5" component="div">
          {firstName + ' '+ lastName}
        </Typography>
        
        <Typography variant="body2">
            {id}
            <br />
          {email}
          <br />
          {department}
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained" onClick={()=>{
        console.log(id);
        navigate(`/edit-user/${id}`)
      }} >Edit</Button>
      <Button variant="contained"  sx={{ 
        backgroundColor: 'red'
      }}onClick={()=>deletUser(id)} >Delete</Button>
      </CardActions>
    </Card>
    </>
  )
}

export default UserCard