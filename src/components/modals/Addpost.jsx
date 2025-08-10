import { Dialog, useMediaQuery,Box, DialogTitle, DialogContent, Stack, Avatar, Typography ,Button} from '@mui/material'
import { ImCross } from "react-icons/im";
import { FaImages } from "react-icons/fa";
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPostModel } from '../../redux/slice';
const Addpost = () => {
    const {openAddPostModal} = useSelector(state => state.service);
    const _700  = useMediaQuery("(min-width:700px)");
    const _500  = useMediaQuery("(min-width:500px)");
    const _300  = useMediaQuery("(min-width:300px)");
    const dispatch = useDispatch();
    const handleMediaRef = () =>{
        mediaRef.current.click();
    };
    const handlepost = () => {};
    

    const [text , setText] = useState();
    const [media , setMedia] = useState();

    const mediaRef = useRef();

    const handleclose= () =>{
        dispatch(addPostModel(false));
    };
  return (
    <>
    <Dialog open={openAddPostModal} onClose={handleclose} fullWidth fullScreen={_700?false:true} >
        <Box position={'absolute'} top={20} right={20} onClick={handleclose}>
            <ImCross size={28} className='image-icon'/>
        </Box>

        <DialogTitle textAlign={'center'} mb={5} >new Thread..</DialogTitle>
        <DialogContent>
            <Stack flex={'row'} gap={2} mb={5}>
                <Avatar src='' alt=''/>

                <Stack>
                <Typography variant='h6' fontWeight={"bold"}
                    fontSize={'1rem'}
                >
                        mohit_12

                 </Typography>
                    <textarea cols={_500?40:25} rows={2} className='text1' placeholder='start a Thread...'  autoFocus onChange={(e)=>setText(e.target.value)}/>

                   {
                    media ? 
                     <img src={URL.createObjectURL(media)} alt=""  id='url-img' width={_500 ? 300: _300 ? 200:100}
                    height={_500 ? 300: _300 ? 200:100}/> : null
                   }

                    <FaImages size={28} className='image-icon' onClick={handleMediaRef}/>
                    <input type="file" accept='image/*' className='file-input' ref={mediaRef} onChange={(e) => setMedia(e.target.files[0])}/>


                    
                </Stack>

                
            </Stack>
            <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography variant='h6' fontSize={'1rem'} color='gray' >
                    Anyone can reply

                </Typography>
                <Button size='large' sx={{
                bgcolor:'GrayText', 
                color:'white',
                borderRadius:'10px',
                ":hover":{bgcolor:'gray' , cursor:'pointer'}


                }} onClick={handlepost}>
                    Post

                </Button>

            </Stack>
        </DialogContent>


    </Dialog>
    </>
  )
}

export default Addpost