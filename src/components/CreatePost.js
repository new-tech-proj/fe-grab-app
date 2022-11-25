import { Grid, Paper, Button, Typography, Box, TextField, TextareaAutosize, autocompleteClasses } from "@mui/material";
import React from "react";
import UploadImage from "./UploadImage";
const CreatePost = () => {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs></Grid>
                <Grid item md={8} xs={12}>
                    <Paper
                        style={{
                            height: "27em",
                            width: "100%",
                            marginTop: "50px"
                        }}
                        elevation={5}
                    >
                        <Grid container >
                            <Grid md={12} xs={12}>
                                <Paper
                                    style={{
                                        height: "27em",
                                        width: "100%",
                                    }}>
                                    <Grid container style={{ margin: "10px" }} rowSpacing={2} >
                                        <Grid item md={9} xs={12} justifyContent="center">
                                            <Typography variant="h5" style={{marginLeft:"10px"}} >Tạo bài đăng </Typography>
                                        </Grid>
                                        <Grid item md={1} xs={12} >
                                            <Button variant="contained" style={{background:"red"}}>Hủy</Button>
                                        </Grid>
                                        <Grid item md={2} xs={12}>
                                            <Button variant="contained">Đăng tin</Button>
                                        </Grid>
                                        <Grid item md={1} xs={12}></Grid>
                                        <Grid item md={10} xs={12} justifyContent="center">
                                            <Paper styple={{textAlign: "center" }}><UploadImage /></Paper>
                                        </Grid>
                                        <Grid item md={2} xs={6} >
                                            <Typography variant="h6" style={{textAlign: "center" }}>Tên mặt hàng:</Typography>
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            <TextareaAutosize
                                                aria-label="minimum height"
                                                minRows={2}
                                                maxRows={2}
                                                placeholder="Tên sản phẩm "
                                                style={{ width: '100%', borderRadius: "5px" }}
                                                />
                                        </Grid>
                                        <Grid item md={12} xs={12} style={{ textAlign: "center" }}>
                                            <TextareaAutosize
                                                aria-label="minimum height"
                                                minRows={10}
                                                maxRows={10}
                                                placeholder="Mô Tả"
                                                style={{ width: '90%', borderRadius: "5px" }}
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

export default CreatePost;
