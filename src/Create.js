// import {
//   Button,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
// } from "@mui/material";
// import React from "react";
// import { useState } from "react";
// import View from "./View";

// const Create = () => {
//   const [productName, setProductName] = useState("");
//   const [price, setPrice] = useState("");
//   const [oldPrice, setOldPrice] = useState("");
//   const [check, setCheck] = useState(false);
//   const [catagories, setCatagories] = useState([
//     "Vegetablesell",
//     "Fruits & Nuts",
//     "Dairy & creams",
//     "Packages Food ",
//     "Staples",
//   ]);
//   const [desc, setDes] = useState("");
//   const [TotalValues, setTotalValues] = useState([
//     {
//       productName: "",
//       price: "",
//       oldPrice: "",
//       isactive: "",
//       catagories: "",
//       description: "",
//     },
//   ]);
//   const handleSubmit = () => {
//     setTotalValues([
//       {
//         productName: productName,
//         price: price,
//         oldPrice: oldPrice,
//         isactive: check,
//         catagories: catagories,
//         description: desc,
//       },
//     ]);
//     alert("submited successfully");
//   };
//   console.log(TotalValues);
//   return (
//     <>
//       <div style={{ padding: "20px" }}>
//         <TextField
//           label={"productName"}
//           size="small"
//           type="text"
//           value={productName}
//           onChange={(e) => setProductName(e.target.value)}
//         />
//         <TextField
//           type="text"
//           size="small"
//           label={"price"}
//           value={price}
//           onChange={(e) =>
//             setPrice(e.target.value.replace(/[^0-9]/g, "").slice(0, 10))
//           }
//         />
//         <TextField
//           type="text"
//           size="small"
//           value={oldPrice}
//           label="oldPrice"
//           onChange={(e) =>
//             setOldPrice(e.target.value.replace(/[^0-9]/g, "").slice(0, 10))
//           }
//         />
//         <TextField
//           size="small"
//           type="checkBox"
//           checked={check}
//           onChange={(e) => setCheck(check === true ? false : true)}
//         />
//         <TextField
//           type="text"
//           value={desc}
//           onChange={(e) => setDes(e.target.value)}
//           label=" desprition"
//           rows={5}
//         />

//         <FormControl size="small">
//           <InputLabel id="demo-simple-select-label">catagories</InputLabel>
//           <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             value={catagories}
//             label="catagories"
//             onChange={(e) => setCatagories(e.target.value)}
//           >
//             <MenuItem value={10}>Vegetables</MenuItem>
//             <MenuItem value={20}>Fruits & Nutsp</MenuItem>
//             <MenuItem value={20}>Dairy & creams</MenuItem>
//             <MenuItem value={20}> Packages Food</MenuItem>
//             <MenuItem value={20}>Staples</MenuItem>
//           </Select>
//         </FormControl>
//         <Button variant="contained" onClick={handleSubmit}>
//           Submit
//         </Button>
//         <View TotalValues={TotalValues} />
//       </div>
//     </>
//   );
// };

// export default Create;
// Product Name (type: string),
// Price(type: number), Old Price(type: number), Category type(type: select),
//  is active(type: checkbox), description(type: textarea)
// Vegetables, Fruits & Nuts, Dairy & creams, Packages Food , Staples
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { instance } from "./Instance";
import Swal from "sweetalert2";
import View from "./View";

const Create = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [catagories, setCatagories] = useState([
    "Vegetablesell",
    "Fruits & Nuts",
    "Dairy & creams",
    "Packages Food ",
    "Staples",
  ]);
  const [description, setDescription] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const viewAllProducts = async () => {
    try {
      const response = await instance.get(`/api/getAllProducts`);
      if (response.status === 200) {
        setAllProducts(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addProducts = async () => {
    try {
      const response = await instance.post(
        `/api/AddProducts`,
        {
          productName: productName,
          price: price,
          oldPrice: oldPrice,
          catagories: catagories,
          isActive: isActive,
          descriptions: description,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Added Successfully ",
        });
        viewAllProducts();
      }
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went to wrong !",
      });
    }
  };

  return (
    <>
      <Box sx={{ marginTop: "20px" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card sx={{ width: "45%", padding: "20px" }}>
          <Typography variant="h4" sx={{ fontWeight: "700", padding: "10px" }}>
            Create Product Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <TextField
                size="small"
                fullWidth
                label="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <TextField
                size="small"
                fullWidth
                label="Price"
                value={price}
                onChange={(e) =>
                  setPrice(e.target.value.replace(/[^0-9]/g, "").slice(0, 5))
                }
              />
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <TextField
                size="small"
                fullWidth
                label="Old Price"
                value={oldPrice}
                onChange={(e) =>
                  setOldPrice(e.target.value.replace(/[^0-9]/g, "").slice(0, 5))
                }
              />
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <FormControl size="small" fullWidth>
                <InputLabel id="demo-simple-select-label">
                  catagories
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={catagories}
                  label="catagories"
                  onChange={(e) => setCatagories(e.target.value)}
                >
                  <MenuItem value={"Vegetables"}>Vegetables</MenuItem>
                  <MenuItem value={"Fruits & Nutsp"}>Fruits & Nutsp</MenuItem>
                  <MenuItem value={"Dairy & creams"}>Dairy & creams</MenuItem>
                  <MenuItem value={" Packages Food"}> Packages Food</MenuItem>
                  <MenuItem value={"Staples"}>Staples</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <TextField
                fullWidth
                label="Description"
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isActive}
                      onChange={() =>
                        setIsActive(isActive === true ? false : true)
                      }
                    />
                  }
                  label="Active"
                />
              </FormGroup>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Button variant="contained" onClick={addProducts}>
                Add
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Box>
      {allProducts.length > 0 ? (
        <View allProducts={allProducts} viewAllProducts={viewAllProducts} />
      ) : null}
    </>
  );
};

export default Create;
