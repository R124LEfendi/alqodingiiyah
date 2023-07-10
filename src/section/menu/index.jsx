import { Box } from "@mui/material";
import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import kotak from "../../assets/images/RotiKotak.png";
import styles from "./Index.module.css";
import useFetch from "../../hooks/useFetch";
import SectionContainer from "../../components/SectionContainer";
import { currencyFormat } from "../../utils";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: 0,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function MenuSection() {
  const { isLoading, items } = useFetch("product");
  return (
    <SectionContainer>
      <Box mt={{ xs: 8, sm: 3, md: 2 }} />
      <h1>MENU</h1>
      <Box sx={{ flexGrow: 2 }}></Box>
      <Grid container spacing={2}>
        {items?.map((val, index) => (
          <Grid item xs={12} sm={4} md={3}>
            <Item className={styles.container}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={val.image}
                    alt="Roti Kotak"
                    className={styles.images}
                  />
                  <CardContent className={styles.containerItem}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className={styles.title}
                    >
                      {val.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className={styles.description}
                    >
                      Roti Kotak adalah makanan khas dari daerah Kuvukiland
                    </Typography>
                    <h3 className={styles.price}>
                      {currencyFormat(val.price, null)}
                    </h3>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Item>
          </Grid>
        ))}
      </Grid>
      ;
    </SectionContainer>
  );
}

export default MenuSection;
