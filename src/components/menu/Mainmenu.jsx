import { Menu, MenuItem } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleColorMode, toggleMainMenu } from '../../redux/slice';



const Mainmenu = () => {
    const {anchorE1} =useSelector(state =>state.service)
    const dispatch = useDispatch();

    const handleclose = () =>{
      dispatch(toggleMainMenu(null));
    };

    const handletoggletheme= () =>{
      handleclose();
      dispatch(toggleColorMode());
    };

    const handleLogout =()=> {};

  return (
    <>
    <Menu anchorEl={anchorE1} open={anchorE1 != null ? true :false} onClose={handleclose} anchorOrigin={{vertical:'bottom' , horizontal:'right'}}
    transformOrigin={{vertical:'top',horizontal:'right'}}
    >
        <MenuItem onClick={handletoggletheme}>Toggle Theme</MenuItem>

        <Link to={'/profile/threads/2'} className='link'>
        <MenuItem>My Profile</MenuItem>
        </Link>

        <MenuItem onClick={handleLogout}>Logout</MenuItem>

        

        


    </Menu>
    
    </>
  )
}

export default Mainmenu