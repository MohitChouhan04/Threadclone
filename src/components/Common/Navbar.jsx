import { Stack, useMediaQuery } from '@mui/material'
import { FaArrowLeft } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { TbEdit } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  const _300 = useMediaQuery("(min-width:300px)");
  return (
    <>
    <Stack flexDirection={'row'}
    maxWidth={'100%'}
    justifyContent={'space-around'}
    alignItems={'center'}
    >
      <FaArrowLeft size={_300?32 : 24} className='image-icon' color='black'/>

        <Link to={'/'} className='link'>
        <FaHome size={_300?32 : 24} color='black'/>
        </Link>
        <Link to={'/search'} className='link'>
        <CiSearch size={_300?32 : 24} color='black'/>
        </Link>
        <Link to={'/edit'} className='link'>
        <TbEdit size={_300?32 : 24} className='image-icon'  color='black'/>
        </Link>
        <Link to={'/heart'} className='link'>
        <CiHeart size={_300?32 : 24} color='black'/>
        </Link>
        <Link to={'/profile/threads/1'}className='link'>
        <RxAvatar size={_300?32 : 24} color='black'/>
        </Link>

    </Stack>
    </>

  )
}

export default Navbar