import { Stack, Typography, useMediaQuery } from '@mui/material'
import { IoIosMore } from "react-icons/io";

import Postone from './post/Postone';
import PostTwo from './post/PostTwo';
import { useDispatch } from 'react-redux';
import { toggleMyMenu } from '../../redux/slice';
import { useSelector } from 'react-redux';

const Post = () => {
      const {darkMode} = useSelector((state=>state.service));
    const dispatch = useDispatch();
    const handleOpenMenu = (e) =>{
        dispatch(toggleMyMenu(e.currentTarget));

    }
    const _700 = useMediaQuery("(min-width:700px)");
    const _400 = useMediaQuery("(min-width:400px)");
    const _300 = useMediaQuery("(min-width:300px)");
  return (
    <Stack flexDirection={'row'} justifyContent={'space-between'} borderBottom={'3px solid gray'}
    width={_700?'70%':_300?"90%" : "100%"}
    p={_700? 2 : _400? 1: "5px"}
    mx={'auto'}

    sx={{
        ":hover":{
            cursor:'pointer',
            boxShadow:_700?'10px 10px 10px grey':"",

        },
        transition:'all ease-in-out 0.3s',
    }}
    
    >
        <Stack flexDirection={'row'} gap={_700 ? 2: 1} >
            <Postone/>
            <PostTwo/>
        </Stack>
        <Stack flexDirection={'row'} justifyContent={'center'} gap={1}
        fontSize={'1rem'}>
            <Typography variant='caption' color={darkMode?'white':'grayText'} fontSize={'1rem'} position={'relative'} top={2}>24th


            </Typography>
            <IoIosMore size={_700 ? 28 : 20} onClick={handleOpenMenu}/>

        </Stack>

    </Stack>
  )
}

export default Post