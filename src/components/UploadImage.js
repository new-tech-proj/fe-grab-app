import React from "react";
import { Grid, Paper, Avatar, Button, Typography, Fab, AddIcon } from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
const UploadImage = () => {
    return (
        <>
            <label htmlFor="upload-photo">
                <input
                    style={{ display: 'none' }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                />
                <Grid container justifyContent="center"  spacing={2} style={{height : "10vh" , margin :"5px" }}>
                    <Grid item justifyItems="center">
                        <Fab color="secondary" size="small" component="span" aria-label="add" variant="extended">
                            <CameraAltIcon /> Upload
                        </Fab>
                    </Grid>
                    <Grid item >
                        <Fab color="primary" size="small" component="span" aria-label="add" variant="extended">
                            <AddPhotoAlternateIcon />Add
                        </Fab>
                    </Grid>
                </Grid>
            </label>
        </>

    )

};
export default UploadImage;