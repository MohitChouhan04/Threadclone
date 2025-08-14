import { Avatar, Button, Stack, Typography, useMediaQuery } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { addPostModel } from "../../redux/slice";


const Input = () => {
  const {myInfo} = useSelector((state) => state.service)
  const dispatch = useDispatch();
  const _700 = useMediaQuery("(min-width:700px)")
  const handleAddPost = () =>{
    dispatch(addPostModel(true));
  }
  return (
   <>
  {
    _700 ? <Stack flexDirection={'row'} alignItems={'center'} width={'70%'} height={28} justifyContent={'space-between'} p={3}
   borderBottom={'2px solid gray'} my={5}
   mx={'auto'} onClick ={handleAddPost}>
    <Stack flexDirection={'row'} alignItems={'center'} gap={2}>
      <Avatar src={myInfo ? myInfo.profilePic : ''} alt={myInfo ? myInfo.userName : ''}/>
      <Typography color={'greyText'}>start a thread...</Typography>

    </Stack>
    <Button size="medium" sx={{
      bgcolor:'grey',
      color:'aliceblue',
      ":hover":{
        bgcolor:'black',
        cursor:'pointer'

      }
    }}>Post</Button>

   </Stack> :null 
  } 
   </>
  )
}

export default Input