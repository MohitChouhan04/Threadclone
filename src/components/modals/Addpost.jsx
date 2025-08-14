import { Dialog, useMediaQuery,Box, DialogTitle, DialogContent, Stack, Avatar, Typography ,Button} from '@mui/material'
import { ImCross } from "react-icons/im";
import { FaImages } from "react-icons/fa";
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPostModel } from '../../redux/slice';
import { useAddPostMutation } from '../../redux/service';
import Loading from '../Common/Loading'

const Addpost = () => {
    const {openAddPostModal ,myInfo} = useSelector(state => state.service);
    const [addNewPost , addNewPostData] = useAddPostMutation();
    const _700  = useMediaQuery("(min-width:700px)");
    const _500  = useMediaQuery("(min-width:500px)");
    const _300  = useMediaQuery("(min-width:300px)");
    const dispatch = useDispatch();
    const handleMediaRef = () =>{
        mediaRef.current.click();
    };
    const handlepost = async () => {
        const data = new FormData();
        if(text){
            
            data.append('text' , text);
        }
        if(media){

            data.append('media' , media);
        }
        await addNewPost(data);

    };
    useEffect(() =>{

        if(addNewPostData.isSuccess){
            setText();
            setMedia();
            dispatch(addPostModel.data(false))
            console.log(addNewPostData.data);
        }

        if(addNewPostData.isError){
            console.log(addNewPostData.error.data);
        }
    } , [addNewPostData.isSuccess , addNewPostData.isSuccess])

    const [text , setText] = useState();
    const [media , setMedia] = useState();

    const mediaRef = useRef();

    const handleclose= () =>{
        dispatch(addPostModel(false));
    };
  



  return (
    <>
    <Dialog open={openAddPostModal} onClose={handleclose} fullWidth fullScreen={_700?false:true} >
        {
            addNewPostData?.isLoading ? <Stack height={'60vh'}>
                <Loading/>
            </Stack> : <>
                    <Box position={'absolute'} top={20} right={20} onClick={handleclose}>
            <ImCross size={28} className='image-icon'/>
        </Box>

        <DialogTitle textAlign={'center'} mb={5} >new Post...</DialogTitle>
        <DialogContent>
            <Stack flex={'row'} gap={2} mb={5}>
                <Avatar src={myInfo? myInfo.profilePic:''} alt={myInfo? myInfo.useName:''}/>

                <Stack>
                <Typography variant='h6' fontWeight={"bold"}
                    fontSize={'1rem'}
                >
                        {myInfo? myInfo.useName:''}

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
        </DialogContent> </>
    
        }



    </Dialog>
    </>
  )
}

export default Addpost