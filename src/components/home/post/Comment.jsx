
import {Avatar, Stack, Typography, useMediaQuery ,Menu , MenuItem} from '@mui/material'
import { IoIosMore } from "react-icons/io";
const Comment = () => {
    const _700 = useMediaQuery("(min-width:700px)");
    const handleDeletcomment= () =>{};
    const handleclose = () => {};
  return (
    <>
    <Stack flexDirection={'row'} justifyContent={'space-between'} px={2}
    pb={4}
    borderBottom={'1px solid gray'}
    margin={'0 auto'}
    // display={'block'}
    width={'90%'}
    >
        <Stack flexDirection={'row'} gap={_700?2 :1}>
            <Avatar src='' alt=''/>
            <Stack flexDirection={'column'}
            >
                <Typography variant='h6' fontWeight={'bold'} fontSize={'0.9rem'}>Mohit chouhan</Typography>
                <Typography variant='subtitled2' fontSize={'0.9rem'}>
                    this is a comment
                </Typography>

            </Stack>

        </Stack>
        <Stack 
        flexDirection={'row'} 
        gap={1} 
        alignItems={'center'} 
        color={'GrayText'} 
        fontSize={'0.9rem'}
        >
            <p>24min</p>
            <IoIosMore size={_700 ?28:20}/>

        </Stack>

    </Stack>
    {/* <Menu
          anchorEl={""}
          open={true}
          onClose={handleclose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
            <MenuItem onClick={handleDeletcomment}>Delete</MenuItem>
        </Menu> */}
    </>
  )
}

export default Comment