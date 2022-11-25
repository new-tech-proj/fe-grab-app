import "./styles.css";
import MyAppBar from "./components/MyAppBar";
import NButton from "./components/NButton";
import { Grid } from "@mui/material";
import React from "react";
const App = () => {
  return (
    <>    
        <Grid
            container
            direction="column"
            justifyContent="space-around"
            alignItems="stretch"
          >
              <Grid item>
                <MyAppBar />
                </Grid>
                <Grid item style={{Margin:"20px"}}>
              </Grid>
        </Grid>


      </>
  );
};
export default App;
