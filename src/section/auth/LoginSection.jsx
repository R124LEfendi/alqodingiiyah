import { TextField, Box } from "@mui/material";
import React from "react";
import logo from "../../assets/images/WHATEAT.png";
import styles from "./LoginSection.module.css";
import AuthLayout from "../../layouts/AuthLayout";

function LoginSection() {
  return (
    <AuthLayout>
      <Box p={{ xs: 2, sm: 4, md: 6 }}>
        <img width="auto" src={logo} alt="what2eat" />
        <p className={styles.titleInput}>Wellcome Back</p>
        <p className={styles.register}>Login to your account</p>
        <div className={styles.input}>
          <TextField label="Name" className={styles.form} />
        </div>
        <div className={styles.input}>
          <TextField label="Password" className={styles.form} />
        </div>
      </Box>
    </AuthLayout>
  );
}

export default LoginSection;
