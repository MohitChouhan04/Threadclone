import { Stack, Typography, useMediaQuery } from '@mui/material'
import { IoIosMore } from "react-icons/io";

import Postone from './post/Postone';
import PostTwo from './post/PostTwo';
import { useDispatch } from 'react-redux';
import { addPostId, toggleMyMenu } from '../../redux/slice';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


const Post = ({e}) => {
      const {darkMode , myInfo} = useSelector((state=>state.service));
    const dispatch = useDispatch();
    const _700 = useMediaQuery("(min-width:700px)");
    const _400 = useMediaQuery("(min-width:400px)");
    const _300 = useMediaQuery("(min-width:300px)");
    
    const [isAdmin , setIsAdmin] = useState();
    const handleOpenMenu = (event) =>{
        dispatch(addPostId(e._id))
        dispatch(toggleMyMenu(event.currentTarget));

    }
    const checkIsAdmin = () =>{
        if(e?.admin._id === myInfo){
            setIsAdmin(true);
            return;
        }
        else{
            setIsAdmin(false);
        };
    };
    useEffect(() => {
        if(e && myInfo){

            checkIsAdmin();
        }

    } , [e , myInfo])
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
            <Postone e={e}/>
            <PostTwo e={e}/>
        </Stack>
        <Stack flexDirection={'row'} justifyContent={'center'} gap={1}
        fontSize={'1rem'}>
            <Typography variant='caption' color={darkMode?'white':'grayText'} fontSize={'1rem'} position={'relative'} top={2}>24th


            </Typography>
            {
            isAdmin ?(<IoIosMore size={_700 ? 28 : 20} onClick={handleOpenMenu}/> ):
             (<IoIosMore size={_700 ? 28 : 20}/>)
            
            }

        </Stack>

    </Stack>
  )
}

export default Post