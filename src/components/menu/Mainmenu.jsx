import { Menu, MenuItem } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addMyInfo, toggleColorMode, toggleMainMenu } from '../../redux/slice';
import { useLogoutMeMutation } from '../../redux/service';
import { useEffect } from 'react';



const Mainmenu = () => {
    const {anchorE1 , myInfo} =useSelector(state =>state.service);
    const [logoutMe , logoutMeData] = useLogoutMeMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleclose = () =>{
      dispatch(toggleMainMenu(null));
    };

    const handletoggletheme= () =>{
      handleclose();
      dispatch(toggleColorMode());
    };

    const handleLogout =async ()=> {
      handleclose();
      await logoutMe();
    };

    useEffect(() => {
      if(logoutMeData.isSuccess){
        dispatch(addMyInfo(null))
        console.log(logoutMeData.data);
        // window.location.reload();
      }
    } ,[logoutMeData.isSuccess])

  return (
    <>
    <Menu anchorEl={anchorE1} open={anchorE1 !== null ? true :false} onClose={handleclose} anchorOrigin={{vertical:'bottom' , horizontal:'right'}}
    transformOrigin={{vertical:'top',horizontal:'right'}}
    >
        <MenuItem onClick={handletoggletheme}>Toggle Theme</MenuItem>

        <Link to={`/profile/threads/${myInfo?._id}`} className='link'>
        <MenuItem>My Profile</MenuItem>
        </Link>

        <MenuItem onClick={handleLogout}>Logout</MenuItem>

        

        


    </Menu>
    
    </>
  )
}

export default Mainmenu