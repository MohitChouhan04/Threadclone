import { Menu, MenuItem } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMyMenu } from "../../redux/slice";
import { useDeletePostMutation } from "../../redux/service";

const Mymenu = () => {
     const {anchorE2 , postId} = useSelector((state) => state.service);
     const dispatch = useDispatch();
     const [deletePost , deletePostData] = useDeletePostMutation();
    const handleclose =  () =>{
      dispatch(toggleMyMenu(null));
    };
    const handleDeletPost =async () =>{
      handleclose();
      await deletePost(postId)

    };
    useEffect(() => {
      if(deletePostData.isSuccess){
        console.log(deletePostData.data);
      }
      if(deletePostData.isError){
        console.log(deletePostData.error.data);
      }
    },[deletePostData.isSuccess , deletePostData.isError])
  return (
    <Menu
      anchorEl={anchorE2}
      open={anchorE2 != null ? true : false }
      onClose={handleclose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
    >
        <MenuItem onClick={handleDeletPost}>Delete</MenuItem>
    </Menu>
  );
};

export default Mymenu;
