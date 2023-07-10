import React from "react";
import styles from "./Hero.module.css";
import SectionContainer from "../../components/SectionContainer";
import Chef from "../../assets/images/cuate.png";
import Grid from "@mui/material/Grid";

function Hero() {
  return (
    <SectionContainer style={{ backgroundColor: "#1ac073" }}>
      <Grid container spacing={1} columns={13} mt={{ xs: 2, sm: 8, md: 16 }}>
        <Grid item xs={12} sm={12} md={6}>
          <div className={styles.container}>
            <div className={styles.content}>
              <h1>
                Authentic Home <br /> food in UK
              </h1>
              <p>
                What2Eat is a courier service in which authentic home cook{" "}
                <br /> food is delivered to a customer.
              </p>
              <div className={styles.news}>
                <form>
                  <input placeholder="Search food you love" />
                  <input type="submit" name="submit" value="Search" />
                </form>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className={styles.cooking}>
            <img src={Chef} alt="cuate" className={styles.img} />
          </div>
        </Grid>
      </Grid>
    </SectionContainer>
  );
}

export default Hero;
