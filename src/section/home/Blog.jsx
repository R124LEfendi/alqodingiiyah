import React from 'react';
import styles from './Blog.module.css';
import kimono from '../../assets/images/RotiKimono.png';
import kotak from '../../assets/images/RotiKotak.png';
import krim from '../../assets/images/RotiKrim.png';
import kruak from '../../assets/images/RotiKruak.png';
import santa from '../../assets/images/RotiSanta.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SectionContainer from '../../components/SectionContainer';

const Card = ({ src, title, description }) => {
  return (
    <Box>
      <img src={src} alt={`${src}-alt`} className={styles.img} />
      <div className={styles.content}>
        <h3 className={styles.rotiTitle}>{title}</h3>
        <p>{description}</p>
      </div>
    </Box>
  );
};

function Blog() {
  return (
    <SectionContainer style={{ backgroundColor: 'white' }}>
      <div className={styles.container}>
        <h2>Our Blog</h2>
        <br />

        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Grid
            container
            sx={{
              display: {
                xs: 'block',
                sm: 'block',
                md: 'flex',
                justifyContent: 'space-between',
              },
            }}
          >
            <Grid ite>
              <Card src={krim} title=" Most Satisfying Cake decorating Cake ideas" description={' Quis hendrerit nibh mauris sed faucibus.'} />
              <Card src={kruak} title=" Most Satisfying Cake decorating Cake ideas" description={' Quis hendrerit nibh mauris sed faucibus.'} />
            </Grid>
            <Grid item>
              <Card src={kimono} title=" Most Satisfying Cake decorating Cake ideas" description={' Quis hendrerit nibh mauris sed faucibus.'} />
            </Grid>
            <Grid item>
              <Card src={santa} title=" Most Satisfying Cake decorating Cake ideas" description={' Quis hendrerit nibh mauris sed faucibus.'} />
              <Card src={kotak} title=" Most Satisfying Cake decorating Cake ideas" description={' Quis hendrerit nibh mauris sed faucibus.'} />
            </Grid>
          </Grid>
        </Box>
      </div>
    </SectionContainer>
  );
}

export default Blog;
