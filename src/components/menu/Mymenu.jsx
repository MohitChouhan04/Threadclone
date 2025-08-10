import { Menu, MenuItem } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMyMenu } from "../../redux/slice";

const Mymenu = () => {
     const {anchorE2} = useSelector((state) => state.service);
     const dispatch = useDispatch();
    const handleclose =  () =>{
      dispatch(toggleMyMenu(null));
    };
    const handleDeletPost = () =>{};
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
