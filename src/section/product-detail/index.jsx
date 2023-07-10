import React, { useEffect, useState } from "react";
import SectionContainer from "../../components/SectionContainer";
import styles from "./index.module.css";
import pizza from "../../assets/images/pizzaa.png"
import masterCard from "../../assets/images/masterCard.png"
import payPal from "../../assets/images/payPal.png"
import visa from "../../assets/images/visa.png"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Grid, Box } from "@mui/material";
import { useLocation, useRoutes } from "react-router-dom";


const menus = ["General Info", "Product Detail", "Reviews"];
const sizing = [<div style={{fontSize:"20px", paddingLeft:"2px"}}> <p>M</p> </div>, 
                <div style={{fontSize:"20px", paddingLeft:"5px"}}> <p>L</p> </div>, 
                <div style={{fontSize:"20px"}}> <p>XL</p> </div>,              
              ];
const star = [<StarBorderIcon style={{ fontSize: 16, color: '#929292'}} />]

const line = [<div style={{backgroundColor:"#cecbcb", height:"2px",margin:"0 10px 0"}}></div>]


function ProductDetail() {

  const route =useLocation()
  
  const items = route?.state?.items

  const [selected, setSelected] = React.useState(menus[0]);

  const [size, setSize] = React.useState(sizing[0]);

  let [count, setCount] = useState(0);

  useEffect(() =>{
    window.scroll({
      top:0
    })
  },[])

function incrementCount() {
  setCount(function (prevCount) {
    return (prevCount += 1);
    });
  }

function decrementCount() {
  setCount(function (prevCount) {
    return (prevCount -= 1);
    });
  }

  return <SectionContainer style={{ overflow: "hidden"}}>
    <Box mt={0}></Box>
    <p className={styles.title}>
      Homemade Pizza
    </p>
    <div className={styles.kitNavbar}>
        {menus.map((val, idx) => {
          return (
            <div
              onClick={() => setSelected(val)}
              key={idx}
              id={styles[val]}
              className={selected === val ? styles.selectedButton : styles.kitButton}>
              <h5
                className={
                  selected === val
                    ? styles.selectedKitButtonText
                    : styles.kitButtonText
                }
              >
                {val}
              </h5>
            </div>
          );
        })}
      </div>
      <div style={{backgroundColor:"#cecbcb", height:"2px", marginBottom:"20px"}}></div>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={6}>
          <img src={items?.image} alt="pizza" style={{width:"100%"}}/>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <div className={styles.priceContainer}>
            <div className={styles.priceRows}>
                <h3 style={{color:"red", fontSize:"24px"}}>Rp.50.000</h3>
                <p className={styles.priceDis}>Rp.100.000</p>
                <div style={{width:"44px", height:"26px", backgroundColor:"red", borderRadius:"4px", color:"white"}}>
                  <p style={{textAlign:"center", paddingTop:"5px", fontWeight:"600", fontSize:"13px"}}>-50%</p>
                </div>
            </div>
            <div style={{width:"100%", textAlign:"right"}}>
              {star}{star}{star}{star}{star}
            <p>12 reviews</p>
            </div>
          </div>
            <div>
              <p style={{padding:"12px 5px 5px", fontSize:"15px", color:"#929292"}}>Size</p>
            </div>
            <div className={styles.sizeNavbar}>
          {sizing.map((val, idx) => {
            return (
              <div onClick={() => setSize(val)} key={idx} id={styles[val]} className={size === val ? styles.selectedSizeButton : styles.sizeButton}>
                <h5 className={size === val ? styles.selectedSizeButtonText : styles.sizeButtonText}>{val}</h5>
              </div>
            );
          })}
        </div>
            <div style={{display:"flex", justifyContent:"space-between", width:"100%"}}>
              <div className="App">
                <div style={{display:"flex",borderRadius:"5px", justifyContent:"space-between", border:"2px gray solid",height:"35px", width:"60px"}}>
                <p style={{width: "36px", textAlign: "center", paddingTop: "7px", fontWeight:"600"}}>{count}</p>
                <div style={{display:"grid", height:"20px"}}>
                <button onClick={incrementCount} style={{width:"25px", height:"17.5px", border:"none"}}>
                  <ArrowDropUpIcon style={{fontSize:"medium", paddingTop:"2px"}}/>
                </button>
                <button  disabled={count < 1} onClick={decrementCount} style={{width:"25px", height:"17.5px", border:"none"}}>
                  <ArrowDropDownIcon style={{fontSize:"medium"}}/>
                </button>
                </div>
                </div>
              </div>              
              <div style={{display:"flex", width:"40%", borderRadius:"5px", height:"40px", backgroundColor:"#17696A", color:"white", alignItems:"center", justifyContent:"center", cursor:"pointer"}}>
                <ShoppingCartIcon style={{fontSize:"19px", marginRight:"5px"}}/>
                <h5>Add To Cart</h5>
              </div>
              <div style={{display:"flex", width:"30%", borderRadius:"5px", height:"36px", backgroundColor:"transparent", color:"#17696A", alignItems:"center", justifyContent:"center",cursor:"pointer", border:"2px #17696A solid"}}>
                <FavoriteBorderIcon style={{fontSize:"19px", marginRight:"5px", color:"#17696A"}}/>
                <h5>Favorite</h5>
              </div>
            </div>
            <div style={{margin:"140px 0 10px"}}>
                <h3>Delivery</h3>
            </div>
            <div style={{width:"100%",margin:"0 0 30px"}}>
              <p style={{fontSize:"15px", letterSpacing:"0.1px"}}>
                Free standard shipping on orders over $35 before tax, plus free returns.
              </p>
            </div>
            <div style={{display:"flex", justifyContent:"space-between", width:"100%", margin:"0 20px 10px"}}>
              <div style={{fontWeight:"200", color:"rgb(172 172 172)"}}>
                <p>TYPE</p>
              </div>
              <div style={{fontWeight:"200", color:"rgb(172 172 172)"}}>
                <p>HOW LONG</p>
              </div>
              <div style={{fontWeight:"200", color:"rgb(172 172 172)", margin:"0 30px 0 -30px"}}>
                <p>HOW MUCH</p>
              </div>
            </div>
              {line}
            <div style={{display:"flex", justifyContent:"space-between", width:"100%", margin:"16px 20px 16px"}}>
              <div style={{fontWeight:"100"}}>
                <p>Standard Delivery</p>
              </div>
              <div style={{fontWeight:"100"}}>
                <p>1-4 Business Day</p>
              </div>
              <div style={{fontWeight:"600", margin:"0 76px 0 31px"}}>
                <p>$4.50</p>
              </div>
            </div>
            {line}
            <div style={{display:"flex", justifyContent:"space-between", width:"100%", margin:"16px 20px 16px"}}>
              <div style={{fontWeight:"100"}}>
                <p>Express Delivery</p>
              </div>
              <div style={{fontWeight:"100"}}>
                <p>1 business day</p>
              </div>
              <div style={{fontWeight:"600", margin:"0 69px 0 36px"}}>
                <p>$10.00</p>
              </div>
            </div>
            {line}
            <div style={{display:"flex", justifyContent:"space-between", width:"100%", margin:"16px 20px 36px"}}>
              <div style={{fontWeight:"100"}}>
                <p>Pick up in store</p>
              </div>
              <div style={{fontWeight:"100"}}>
                <p>1-3 business day</p>
              </div>
              <div style={{fontWeight:"600", margin:"0 83px 0 13px"}}>
                <p>Free</p>
              </div>
            </div>
            <div style={{backgroundColor:"#cecbcb", height:"2px", margin:"1px 0px 20px", width:"104%"}}></div>
            <div>
              <h3>Return</h3>
            </div>
            <div style={{width:"100%",margin:"10px 0 20px"}}>
              <p style={{fontSize:"15px", letterSpacing:"0.1px"}}>
              You have 60 days to return the item(s) using any of the following methods:</p>
            </div>
            <ul style={{padding:"unset", paddingLeft:"18px", lineHeight:"29px"}}>
              <li><p>Free store return</p></li>
              <li><p>Free return via USPS Dropoff Service</p></li>
            </ul>
            <div style={{backgroundColor:"#cecbcb", height:"2px", margin:"20px 0px 20px", width:"104%"}}></div>
            <div style={{display:"flex", gap:"14px", color:"rgb(162 155 155)"}}>
              <div>
                <h3>Shared: </h3>
              </div>
                <FacebookIcon/>
                <TwitterIcon/>
                <InstagramIcon/>
            </div>
            <div style={{paddingTop:"60px"}}>
              <img src={masterCard} alt="masterCard" style={{margin:"0 16px 0 0"}}/>
              <img src={payPal} alt="payPal" style={{margin:"0 16px 0 0"}}/>
              <img src={visa} alt="visa" />
            </div>
        </Grid>
      </Grid>
  </SectionContainer>
}

export default ProductDetail;
