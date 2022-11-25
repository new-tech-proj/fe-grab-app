import React from "react";
import { Grid, Paper,Avatar, Button, Typography ,Fab,AddIcon } from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
const UploadImage = () =>{
    return (
        <>  <label htmlFor="upload-photo">
        <input
            style={{ display: 'none'}}
            id="upload-photo"
            name="upload-photo"
            type="file"
        />

        <Fab
            color="secondary"
            size="small"
            component="span"
            aria-label="add"
            variant="extended"
        >
            <CameraAltIcon /> Upload photo
        </Fab>
        <br />
        <br />

        <Fab color="primary" size="small" component="span" aria-label="add">
            <AddPhotoAlternateIcon />
        </Fab>
        </label>
        
        </>


    )

};
export default UploadImage;