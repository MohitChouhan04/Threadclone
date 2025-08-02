import React, { useState } from 'react'
import { Stack, TextField } from '@mui/material'
import Post from '../../components/home/Post'
import Comment from '../../components/home/post/Comment'
const Singlepost = () => {
  const [comment ,setCommment] = useState('');






  return (
    <>
    <Stack flexDirection={'column'} my={5} gap={2}>
        <Post />

        <Stack flexDirection={'column'} gap={2} width={'80%'} mx={'auto'}>
            <Comment/>
        </Stack>
        <TextField variant='outlined' autoFocus placeholder='comment here...' id='comment' sx={{width:'50%',
          margin:'0 auto', 
          my:5,
          p:1
         

        } }
        onChange={(e)=>setCommment(e.target.value)}
        />


    </Stack>
    </>
  )
}

export default Singlepost