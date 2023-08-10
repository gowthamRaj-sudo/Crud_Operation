// import {
//   Button,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
// } from "@mui/material";
// import React, { useState } from "react";

// const Edit = ({ TotalValues }) => {
//   const [editValues, setEditValues] = useState(TotalValues);
//   const handleSubmit = () => {
//     setEditValues({
//       productName: editValues.productName,
//       price: editValues.price,
//       oldPrice: editValues.oldPrice,
//       isactive: editValues.isactive,
//       catagories: editValues.catagories,
//       description: editValues.description,
//     });
//   };
//   console.log(editValues);
//   return (
//     <div>
//       <TextField
//         label={"productName"}
//         size="small"
//         type="text"
//         value={editValues.productName}
//         onChange={(e) =>
//           setEditValues({ ...editValues, productName: e.target.value })
//         }
//       />
//       <TextField
//         type="text"
//         size="small"
//         label={"price"}
//         value={editValues.price}
//         onChange={(e) =>
//           setEditValues({
//             ...editValues,
//             price: e.target.value.replace(/[^0-9]/g, "").slice(0, 10),
//           })
//         }
//       />
//       <TextField
//         type="text"
//         size="small"
//         value={editValues.oldPrice}
//         label="oldPrice"
//         onChange={(e) =>
//           setEditValues({
//             ...editValues,
//             oldPrice: e.target.value.replace(/[^0-9]/g, "").slice(0, 10),
//           })
//         }
//       />
//       <TextField
//         size="small"
//         type="checkBox"
//         checked={editValues.isactive}
//         // onChange={(e) => setEditValues(check === true ? false : true)}
//       />
//       <TextField
//         type="text"
//         value={editValues.description}
//         onChange={(e) =>
//           setEditValues({ ...editValues, description: e.target.value })
//         }
//         label=" desprition"
//         rows={5}
//       />

//       <FormControl size="small">
//         <InputLabel id="demo-simple-select-label">catagories</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={editValues.catagories}
//           label="catagories"
//           onChange={(e) =>
//             setEditValues({ ...editValues, catagories: e.target.value })
//           }
//         >
//           <MenuItem value={10}>Vegetables</MenuItem>
//           <MenuItem value={20}>Fruits & Nutsp</MenuItem>
//           <MenuItem value={20}>Dairy & creams</MenuItem>
//           <MenuItem value={20}> Packages Food</MenuItem>
//           <MenuItem value={20}>Staples</MenuItem>
//         </Select>
//       </FormControl>
//       <Button variant="contained" onClick={handleSubmit}>
//         Submit
//       </Button>
//     </div>
//   );
// };

// export default Edit;
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
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { instance } from "./Instance";
import Swal from "sweetalert2";

const Edit = ({
  id,
  open,
  onClose,
  data,
  setState,
  isActive,
  setIsActive,
  viewAllProducts,
}) => {
  console.log(data);

  const updateAllProducts = async () => {
    try {
      const response = await instance.post(
        `/api/updateAllProducts?id=${id}`,
        {
          productName: data.productName,
          price: data.price,
          oldPrice: data.oldPrice,
          catagories: data.catagories,
          description: data.description,
          isActive: isActive,
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
          text: "Update Successfully ",
        });
        viewAllProducts();
        onClose();
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
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            width: "50%",
            padding: "20px",
            transform: "translateX(50%)",
          }}
        >
          <Box sx={{ marginTop: "20px" }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card sx={{ width: "100%", padding: "20px" }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: "700", padding: "10px" }}
              >
                Edit Product Details
              </Typography>
              <Grid container spacing={2}>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                  <TextField
                    size="small"
                    fullWidth
                    label="Product Name"
                    value={data.productName}
                    onChange={(e) =>
                      setState({ ...data, productName: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                  <TextField
                    size="small"
                    fullWidth
                    label="Price"
                    value={data.price}
                    onChange={(e) =>
                      setState({
                        ...data,
                        price: e.target.value
                          .replace(/[^0-9]/g, "")
                          .slice(0, 5),
                      })
                    }
                  />
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                  <TextField
                    size="small"
                    fullWidth
                    label="Old Price"
                    value={data.oldPrice}
                    onChange={(e) =>
                      setState({
                        ...data,
                        oldPrice: e.target.value
                          .replace(/[^0-9]/g, "")
                          .slice(0, 5),
                      })
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
                      value={data.catagories}
                      label="catagories"
                      onChange={(e) =>
                        setState({ ...data, catagories: e.target.value })
                      }
                    >
                      <MenuItem value={10}>Vegetables</MenuItem>
                      <MenuItem value={20}>Fruits & Nutsp</MenuItem>
                      <MenuItem value={20}>Dairy & creams</MenuItem>
                      <MenuItem value={20}> Packages Food</MenuItem>
                      <MenuItem value={20}>Staples</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                  <TextField
                    fullWidth
                    label="Description"
                    rows={5}
                    value={data.description}
                    onChange={(e) =>
                      setState({ ...data, description: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                  <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={isActive}
                          // onChange={() => setState(data.isActive ? false : true)}
                        />
                      }
                      label="Active"
                    />
                    {/* <FormControlLabel
                  required
                  control={<Checkbox />}
                  label="InActive"
                /> */}
                  </FormGroup>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Button variant="contained" onClick={updateAllProducts}>
                    Update
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Edit;
