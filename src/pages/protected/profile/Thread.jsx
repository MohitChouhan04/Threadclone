import { useSelector } from 'react-redux';
import Post from '../../../components/home/Post'
import {Stack ,Typography,useMediaQuery} from '@mui/material'
const Thread = () => {
    const _700 = useMediaQuery("(min-width:700px)");
    const { user } = useSelector((state) => state.service);
  return (
    <>
    {
      user ? user.user ? user.user.threads.length > 0 ?
      <Stack flexDirection={'column'} gap={2}
    mb={10}
    width={_700?'800px':'90%'} margin={'0 auto'} display={'block'}>
    {
      user.user.threads.map((e) => {
        return    <Post key={e._id} e={e}/>
      })
    }
  
    </Stack> : 
    <Typography variant='h6' textAlign={'center'}>
      No thread yet


    </Typography> : '':''

    }


    
    </>
  )
}

export default Thread