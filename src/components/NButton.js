import React from "react";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
export default function BasicButtons() {
  return (
    <>
      <Grid container xs ={12} justifyItems="Center">
          <Grid item ><Button variant="text">Text</Button></Grid>
          <Grid item><Button variant="contained">Contained</Button></Grid>
          <Grid item ><Button variant="outlined">Outlined</Button></Grid>
      </Grid>
    </>
  );
}
