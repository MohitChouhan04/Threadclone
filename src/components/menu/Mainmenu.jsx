import { Menu, MenuItem } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';



const Mainmenu = () => {
    const handleclose = () =>{};
    const handletoggletheme= () =>{};
    const handleLogout =()=> {};
  return (
    <>
    <Menu anchorEl={''} open={true} onClose={handleclose} anchorOrigin={{vertical:'bottom' , horizontal:'right'}}
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