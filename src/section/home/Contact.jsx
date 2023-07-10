import React from "react";
import styles from "./Contact.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Motor from "../../assets/images/FoodDelivery.png";
import SectionContainer from "../../components/SectionContainer";

export default function ColumnsGrid() {
  return (
    <SectionContainer>
      <Grid container spacing={1} columns={13}>
        <Grid item xs={12} sm={12} md={7}>
          <div className={styles.text}>
            <h2>Do you have a question <br/> or want to become a seller?</h2>
            <h5>
              Fill this form and our manager will contact you next 48 hours.
            </h5>
          </div>
          <div>
            <Box
              component="form"
              sx={{ "& > :not(style)": { m: 1, width: "38.7%" } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                className={styles.fieldColor}
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
              />
              <TextField
                className={styles.fieldColor}
                id="outlined-basic"
                label="Name"
                variant="outlined"
              />
            </Box>
            <Box item xs={2} sm={12} md={6}
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "80%" },
                "& .MuiInputBase-root": { height: 200 },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                className={styles.fieldColor}
                id="outlined-basic"
                label="Your Message"
                variant="outlined"
              />
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className={styles.motor}>
            <img src={Motor} alt="FoodDelivery" className={styles.img}/>
          </div>
        </Grid>
      </Grid>
    </SectionContainer>
  );
}

// import React from "react";
// import SectionContainer from "../components/SectionContainer";
// import styles from "./ProductDetail.module.css";

// const menus = ["General Info", "Product Detail", "Reviews"];

// function ProductDetail() {

//   const [selected, setSelected] = React.useState(menus[0]);

//   return <SectionContainer style={{ overflow: "hidden" }}>
//     <p 
//       style={{ fontSize:"40px",
//       fontWeight:"600",  
//     }}>
//       Homemade Pizza
//     </p>
//     <div style={{display: "flex",
//       height: "35px",
//       backgroundColor: "#f3ba00",
//       width: "fit-content",
//       overflow: "auto",
//       whiteSpace: "nowrap"
//     }}
//     >
//         {menus.map((val, idx) => {
//           return (
//             <div
//               onClick={() => setSelected(val)}
//               key={idx}
//               id={styles[val]}
//               style={
//                 selected === val ? {backgroundColor: "transparent",
//                 cursor: "pointer",
//                 padding: "10px 24px"} : {display: "flex",
//                 textAlign: "center",
//                 padding: "10px 24px",
//                 backgroundColor: "#f6f7f9",
//                 fontSize: "16px",
//                 cursor: "pointer",
//               }}
//             >
//               <h5
//                 className={
//                   selected === val
//                     ? styles.selectedKitButtonText
//                     : styles.kitButtonText
//                 }
//               >
//                 {val}
//               </h5>
//             </div>
//           );
//         })}
//       </div>
//   </SectionContainer>
// }

// export default ProductDetail;

