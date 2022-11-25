import { Grid, Paper, Button, Typography, TextareaAutosize } from "@mui/material";
import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import "../css/base.css";
import "../css/reset.css";
import ButtonState from "./ButtonState";

const SLIDE_COUNT = 3;
const slides = Array.from(Array(SLIDE_COUNT).keys()); /// 
const EditPost = () => {
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
                        elevation={2}
                    >
                        <Grid container >
                            <Grid md={12} xs={12}>
                                <Paper
                                    style={{
                                        height: "40em",
                                        width: "100%",
                                    }}>
                                    <Grid container style={{ margin: "5px" }} rowSpacing={2}  spacing={1}>
                                        <Grid item md={9} xs={12} justifyContent="center">
                                            <Typography variant="h5" style={{marginLeft:"10px"}} >Chỉnh sửa </Typography>
                                        </Grid>
                                        <Grid item md={1} xs={12} >
                                            <Button variant="contained" style={{background:"red"}}>Xóa</Button>
                                        </Grid>
                                        <Grid item md={2} xs={12}>
                                            <Button variant="contained">Lưu Lại</Button>
                                        </Grid>
                                        <Grid item md={1} xs={12}></Grid>
                                        <Grid item md={10} xs={12} justifyContent="center">
                                                <EmblaCarousel slides={slides}/>
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
                                        <Grid item md={4} xs={6} textAlign="center" >
                                            <ButtonState/>
                                        </Grid>
                                        <Grid item md={12} xs={12} style={{ textAlign: "center" }}>
                                            <TextareaAutosize
                                                aria-label="minimum height"
                                                minRows={8}
                                                maxRows={8}
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

export default EditPost;
