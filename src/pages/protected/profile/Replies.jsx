import React from 'react'
import { Stack, useMediaQuery } from '@mui/system'
import Comment from '../../../components/home/post/Comment'
const Replies = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  return (
   <>
   <Stack flexDirection={'column'} gap={2} width={_700?'800px':'90%'} margin={'0 auto'} display={'block'}>
    {/* //comment */}
    <Comment/>
  

   </Stack>
   </>
  )
}

export default Replies