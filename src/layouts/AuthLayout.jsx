import { Grid, Box } from "@mui/material";
import React, { Children } from "react";
import rafiki from "../assets/images/rafiki.svg";

import styles from "./AuthLayout.module.css";

function AuthLayout({ children }) {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={6} className={styles.containerBox}>
        <p className={styles.title}>Wellcome To What2Eat</p>
        <div>
          <Box component="img" src={rafiki} width="100%" />
        </div>
        <h5 className={styles.footer}>© Copyright 2022 </h5>
      </Grid>
      <Grid item xs={12} sm={12} md={6} className={styles.containerInput}>
        {children}
      </Grid>
    </Grid>
  );
}

export default AuthLayout;
