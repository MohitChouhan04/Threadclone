import { Stack, useMediaQuery } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Common/Header'
import Addpost from '../../components/modals/Addpost'
import Editprofile from '../../components/modals/Editprofile'
import Mainmenu from '../../components/menu/Mainmenu'
const ProtectedLayout = () => {
  const _700 = useMediaQuery("(min-width:700px)")
  return (
    <>
    
    <Stack flexDirection={'column'} maxWidth={_700?'800px':'90%'} minWidth={'100%'} mx={'auto'} overflow={'hidden'}></Stack>

    <Header/>
    {/* <Addpost/> */}
    {/* <Editprofile/> */}
    {/* <Mainmenu/> */}
    <Outlet/>
    </>
  )
}

export default ProtectedLayout