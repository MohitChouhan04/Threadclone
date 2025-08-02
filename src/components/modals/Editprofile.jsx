import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { ImCross } from "react-icons/im";

const Editprofile = () => {
  const _700 = useMediaQuery("(min-width:700px)");

  const [pic, setPic] = useState();
  const [bio, setBio] = useState();
  const imgRef = useRef();
  const handlephoto = () => {
    imgRef.current.click();
  };

  const handleclose = () => {};
  const handleupdate = () => {};
  return (
    <>
      <Dialog
        open={true}
        onClose={handleclose}
        fullWidth
        fullScreen={_700 ? false : true}
      >
        <Box position={"absolute"} top={20} right={20} onClick={handleclose}>
          <ImCross size={28} />
        </Box>
        <DialogTitle textAlign={"center"} mb={5}>
          Edit profile
        </DialogTitle>

        <DialogContent>
          <Stack flexDirection={"column"} gap={1}>
            <Avatar
              src={pic ? URL.createObjectURL(pic) : ""}
              alt=""
              sx={{ width: 96, height: 96, alignSelf: "center" }}
            />
            <Button
              size="large"
              sx={{
                border: "2px solid gray",
                borderRadius: "10px",
                width: 96,
                height: 40,
                alignSelf: "center",
                my: 2,
                ":hover": {
                  cursor: "pointer",
                },
              }}
              onClick={handlephoto}
            >
              Change
            </Button>

            <input
              type="file"
              className="file-input"
              accept='image/*'
              ref={imgRef}
              onChange={(e) => setPic(e.target.files[0])}
            />
            <Typography
              variant="subtitled"
              fontWeight={"bold"}
              fontSize={"1.2rem"}
              my={2}
            >
              {" "}
              Username
            </Typography>

            <input
              type="text"
              value={"mohit_chouhan"}
              readOnly
              className="text1"
            />
          </Stack>
          <Stack flexDirection={"column"} gap={1}>
            <Typography
              variant="subtitled"
              fontWeight={"bold"}
              fontSize={"1.2rem"}
              my={2}
            >
              {" "}
              email
            </Typography>

            <input
              type="text"
              value={"mohit_chouhan"}
              readOnly
              className="text1"
            />
          </Stack>
          <Stack flexDirection={"column"} gap={1}>
            <Typography
              variant="subtitled"
              fontWeight={"bold"}
              fontSize={"1.2rem"}
              my={2}
            >
              {" "}
              Bio
            </Typography>

            <input
              type="text"
              
            
              className="text1 "
              placeholder=""
              onChange={(e) => setBio(e.target.value)}
            />
          </Stack>
          <Button
            size="larget"
            sx={{
              border: "2px solid gray",
              borderRadius: "10px",
              bgcolor: "GrayText",
              color: "white",
              width: "100%",
              my: 2,
              fontSize: "1.2rem",
              ":hover": { cursor: "pointer", bgcolor: "gray" },
            }}
            onClick={handleupdate}
          >
            Update
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Editprofile;
