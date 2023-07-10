import React from 'react';
//COMPONENTS
import Loading from '../../components/Loading';
import placeholder from '../../assets/images/placeholder.png';
import Star from '@mui/icons-material/Star';
import Add from '@mui/icons-material/Add';

//UTILITY
import useFetch from '../../hooks/useFetch';
import styles from './HomeKitchen.module.css';
import { capitalFirstLetter, currencyFormat } from '../../utils';
import { useNavigate } from 'react-router-dom';
import SectionContainer from '../../components/SectionContainer';

//ARRAY BUTTON
const menus = ['All', 'Button', 'Free Delivery', 'New', 'Comming'];

function HomeKitchen() {
  //INISIALISASI REACT ROUTER
  const navigate = useNavigate();
  //MENGAMBIL DATA DARI DATABASE
  const { isLoading, items } = useFetch('product');
  //BUTTON YANG TERPILH
  const [selected, setSelected] = React.useState(menus[0]);

  return (
    <SectionContainer style={{ overflow: 'hidden' }}>
      <p style={{fontSize: "30px", fontWeight:"600", margin: "0 0 20px"}}>Home Kitchen</p>
      <div>
        <div className={styles.kitNavbar}>
          {menus.map((val, idx) => {
            return (
              <div onClick={() => setSelected(val)} key={idx} id={styles[val]} className={selected === val ? styles.selectedButton : styles.kitButton}>
                <h5 className={selected === val ? styles.selectedKitButtonText : styles.kitButtonText}>{val}</h5>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className={styles.filters}>
          <h4>Filters</h4>
        </div>
      </div>
      {/* KETIKA LOADING */}
      {isLoading && (
        <div className={styles.contFoods}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((val, idx) => {
            return (
              <div key={idx} className={styles.foods}>
                <div className={styles.loading}>
                  <Loading />
                </div>
              </div>
            );
          })}
        </div>
      )}
      {/* ================ */}
      <div className={styles.contFoods}>
        {items?.map((val, idx) => {
          return (
            <div key={idx} className={styles.foods} onClick={() => navigate('/product-detail/:productId', {state:{items:val}})}>
              <img src={val.image || placeholder} loading="lazy" alt={`pizza/${val.image}`} placeholder="blur" />
              <div className={styles.content}>
                <div className={styles.row}>
                  <h3>{capitalFirstLetter(val.name)}</h3>
                  <h3>{currencyFormat(val.price, null)}</h3>
                </div>

                <div className={styles.row}>
                  <div className={styles.left}>
                    <div className={styles.chip}>
                      <Star style={{ width: 12 }} />
                      <p>4.7</p>
                    </div>
                    <div className={styles.chip}>
                      <p>50-79 min</p>
                    </div>
                  </div>
                  <div className={styles.add}>
                    <Add style={{ color: '#fff', width: 16 }} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.loadmore}>
        <div>
          <Add style={{ fontSize: 16, color: '#929292' }} />
          <a href="#">Load More</a>
        </div>
      </div>
    </SectionContainer>
  );
}

export default HomeKitchen;
