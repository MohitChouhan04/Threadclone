import { Stack, useMediaQuery } from '@mui/material'
import { FaArrowLeft } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { TbEdit } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPostModel } from '../../redux/slice';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Navbar = () => {
  
  const {darkMode , myInfo} = useSelector((state=>state.service));
  
  const _300 = useMediaQuery("(min-width:300px)");
  const _700 = useMediaQuery("(min-width:700px)");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showArrow , setShowArrow] = useState(false);
  const checkArrow = () => {
     if (window.location.pathname.startsWith('/post/') && _700){
      showArrow(true);
      return ;

     }
     setShowArrow(false);
  };

  const handleAddPost =() =>{
    dispatch(addPostModel(true));

  }

  const handleNavigate = ()  =>{
    navigate(-1);
  }
  useState(() => {
    checkArrow();
  } , [window.location.pathname])
  return (
    <>
    <Stack flexDirection={'row'}
    maxWidth={'100%'}
    justifyContent={'space-around'}
    alignItems={'center'}
    >
     {
      showArrow ?  <FaArrowLeft size={_300?32 : 24} className='image-icon' color={darkMode ?'white' :'black'}/>
      : null
     }

        <Link to={'/'} className='link'>
        <FaHome size={_300?32 : 24} color={darkMode ?'white' :'black'}/>
        </Link>
        <Link to={'/search'} className='link'>
        <CiSearch size={_300?32 : 24} color={darkMode ?'white' :'black'}/>
        </Link>
        <Link to={'/edit'} className='link'>
        <TbEdit size={_300?32 : 24} className='image-icon'  color={darkMode ?'white' :'black'} onClick={handleAddPost}/>
        </Link>
        <Link to={'/heart'} className='link'>
        <CiHeart size={_300?32 : 24} color={darkMode ?'white' :'black'}/>
        </Link>
        <Link to={`/profile/threads/${myInfo ?._id}`}className='link'>
        <RxAvatar size={_300?32 : 24} color={darkMode ?'white' :'black'}/>
        </Link>

    </Stack>
    </>

  )
}

export default Navbar