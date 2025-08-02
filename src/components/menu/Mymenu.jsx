import { Menu, MenuItem } from "@mui/material";
import React from "react";

const Mymenu = () => {
    const handleclose =  () =>{};
    const handleDeletPost = () =>{};
  return (
    <Menu
      anchorEl={""}
      open={true}
      onClose={handleclose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
    >
        <MenuItem onClick={handleDeletPost}>Delete</MenuItem>
    </Menu>
  );
};

export default Mymenu;
