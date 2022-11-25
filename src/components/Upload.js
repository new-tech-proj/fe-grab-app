import { Grid, Paper,Button, Typography ,Box, TextField,TextareaAutosize, autocompleteClasses} from "@mui/material";
import React from "react";
import UploadImage from "./UploadImage";
import MultilineTextFields from "./MulTextField";
const Upload = () => {
    return(
        <>
        <Grid container spacing={3}>
            <Grid item xs></Grid>
            <Grid item md={8} xs={12}>
                <Paper
                    style={{
                        height: "27em",
                        width: "100%",
                        marginTop:"50px"
                    }}
                    elevation={5}
			    >
                    <Grid container>
                        <Grid md={12} xs={12}>
                            <Paper
                                style={{
                                    height: "27em",
                                    width: "100%",
                                }}>
                                <Grid container style={{margin:"10px"}} rowSpacing={2} >
                                    <Grid item md={9} xs={12}>
                                        <Typography variant="h5">Tạo bài viết </Typography>
                                    </Grid>
                                    <Grid item md={1} xs={12} >
                                        <Button variant="contained">Hủy</Button>
                                    </Grid>
                                    <Grid item md={2} xs={12}>
                                        <Button variant="outlined">Đăng tin</Button>
                                    </Grid>
                                    <Grid item md={1} xs={12}></Grid>
                                    <Grid item md={10} xs={12} justifyContent="center">
                                        <Paper styple={{marginTop:"10px 10px 10px 20px"}}><UploadImage/></Paper>
                                    </Grid>
                                    <Grid item md={1} xs={12}></Grid>
                                    <Grid item md={2} xs={6}>
                                        <Typography variant="h6" style={{marginTop:"20px",textAlign:"left"}}>Tên mặt hàng:</Typography>
                                    </Grid>
                                    <Grid item md={6} xs={6} style={{textAlign:"justify"}}>
                                        <MultilineTextFields/>
                                    </Grid>
                                    <Grid item md={12} xs={12} style={{textAlign:"center"}}>
                                        <TextareaAutosize
                                            aria-label="minimum height"
                                            minRows={10}
                                            maxRows={10}
                                            placeholder="Mô Tả"
                                            style={{ width: '90%',borderRadius:"5px"}}
                                            />
                                    </Grid>
                                </Grid>
                            </Paper>

                        </Grid>
                        <Grid xs={12}></Grid>
                        <Grid></Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs ></Grid>
		</Grid>
        </>
    )

  };
  
export default Upload;
  