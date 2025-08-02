import React from 'react'
import { Stack } from '@mui/material'
import Input from '../../components/home/Input'
import Post from '../../components/home/Post'
import {Button } from '@mui/material'
const Home = () => {
  return (
    <>
    <Input/>
    <Stack flexDirection={'column'} gap={2} mb={10} >
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    </Stack>
    <Button size="large" sx={{my:5 , p:3 , textDecoration:"underline", cursor:'pointer'}}>Load more..</Button>
    </>
  )
}

export default Home