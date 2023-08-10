// import {
//   Button,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
// } from "@mui/material";
// import React, { useState } from "react";
// import Edit from "./Edit";

// const View = ({ TotalValues }) => {
//   console.log(TotalValues);
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
//       <table>
//         <tr>
//           <th>ProductName</th>
//           <th>price</th>
//           <th>oldPrice</th>
//           <th>isActive</th>
//           <th>description</th>
//           <th>catagories</th>
//         </tr>
//         <tbody>
//           {/* {TotalValues?.map((e) => ( */}
//           <tr>
//             <td>
//               {" "}
//               <TextField
//                 label={"productName"}
//                 size="small"
//                 type="text"
//                 value={editValues.productName}
//                 onChange={(e) =>
//                   setEditValues({
//                     ...editValues,
//                     productName: e.target.value,
//                   })
//                 }
//               />
//             </td>
//             <td>
//               {" "}
//               <TextField
//                 type="text"
//                 size="small"
//                 label={"price"}
//                 value={editValues.price}
//                 onChange={(e) =>
//                   setEditValues({
//                     ...editValues,
//                     price: e.target.value.replace(/[^0-9]/g, "").slice(0, 10),
//                   })
//                 }
//               />
//             </td>
//             <td>
//               {" "}
//               <TextField
//                 type="text"
//                 size="small"
//                 value={editValues.oldPrice}
//                 label="oldPrice"
//                 onChange={(e) =>
//                   setEditValues({
//                     ...editValues,
//                     oldPrice: e.target.value
//                       .replace(/[^0-9]/g, "")
//                       .slice(0, 10),
//                   })
//                 }
//               />
//             </td>
//             <td>
//               {" "}
//               <TextField
//                 size="small"
//                 type="checkBox"
//                 checked={editValues.isactive}
//                 // onChange={(e) => setEditValues(check === true ? false : true)}
//               />
//             </td>
//             <td>
//               {" "}
//               <TextField
//                 type="text"
//                 value={editValues.description}
//                 onChange={(e) =>
//                   setEditValues({
//                     ...editValues,
//                     description: e.target.value,
//                   })
//                 }
//                 label=" desprition"
//                 rows={5}
//               />
//             </td>
//             <td>
//               {" "}
//               <FormControl size="small">
//                 <InputLabel id="demo-simple-select-label">Age</InputLabel>
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   value={editValues.catagories}
//                   label="catagories"
//                   onChange={(e) =>
//                     setEditValues({
//                       ...editValues,
//                       catagories: e.target.value,
//                     })
//                   }
//                 >
//                   <MenuItem value={10}>Vegetables</MenuItem>
//                   <MenuItem value={20}>Fruits & Nutsp</MenuItem>
//                   <MenuItem value={20}>Dairy & creams</MenuItem>
//                   <MenuItem value={20}> Packages Food</MenuItem>
//                   <MenuItem value={20}>Staples</MenuItem>
//                 </Select>
//               </FormControl>
//             </td>
//             <td>
//               <Button variant="contained" onClick={handleSubmit}>
//                 Update
//               </Button>
//               {/* <Button variant="contained" onClick={()}>
//                 Delete
//               </Button> */}
//             </td>
//           </tr>
//           {/* ))} */}
//         </tbody>
//       </table>

//       {/* <Edit TotalValues={TotalValues} /> */}
//     </div>
//   );
// };

// export default View;

import {
  Box,
  Button,
  Card,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Edit from "./Edit";
import { instance } from "./Instance";
import Swal from "sweetalert2";
import ConfirmationModal from "./Component/ConfirmationModal";

const View = ({ allProducts, viewAllProducts }) => {
  const [open, setOpen] = useState(false);
  const [allProductsDetails, setAllProductsDetails] = useState([]);
  const [isActive, setIsActive] = useState(null);
  const [id, setId] = useState(null);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleUpdate = (data) => {
    setOpen(true);
    setAllProductsDetails(data);
    setIsActive(data.isActive);
    setId(data.id);
  };
  const handleGetId = (id) => {
    setId(id);
    setConfirmationOpen(true);
  };
  const handleDeleteProduct = async () => {
    try {
      const response = await instance.post(
        `/api/deleteSelectedProducts?id=${id}`
      );
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Deleted Successfully ",
        });
        setConfirmationOpen(false);
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
      <ConfirmationModal
        open={confirmationOpen}
        onClose={() => setConfirmationOpen(false)}
        onClick={handleDeleteProduct}
        closeOnClick={() => setConfirmationOpen(false)}
        text={"Are you want delete ?"}
      />
      <Box sx={{ marginTop: "20px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card sx={{ width: "45%", padding: "20px" }}>
            {" "}
            <Typography
              variant="h4"
              sx={{ fontWeight: "700", padding: "10px" }}
            >
              View Product Details
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{ background: "#5e35b1", color: "white" }}>
                  <TableRow>
                    <TableCell sx={{ color: "white", fontWeight: "600" }}>
                      Product Name
                    </TableCell>
                    <TableCell sx={{ color: "white", fontWeight: "600" }}>
                      Price
                    </TableCell>
                    <TableCell sx={{ color: "white", fontWeight: "600" }}>
                      Old Price
                    </TableCell>
                    <TableCell sx={{ color: "white", fontWeight: "600" }}>
                      Catagories
                    </TableCell>
                    <TableCell sx={{ color: "white", fontWeight: "600" }}>
                      IsActive
                    </TableCell>
                    <TableCell sx={{ color: "white", fontWeight: "600" }}>
                      Description
                    </TableCell>
                    <TableCell sx={{ color: "white", fontWeight: "600" }}>
                      Update
                    </TableCell>
                    <TableCell sx={{ color: "white", fontWeight: "600" }}>
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allProducts.map((data) => (
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>{data.productName}</TableCell>
                      <TableCell>{data.price}</TableCell>
                      <TableCell>{data.oldPrice}</TableCell>
                      <TableCell>{data.catagories}</TableCell>
                      <TableCell>{data.isActive}</TableCell>
                      <TableCell>{data.description}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() => handleUpdate(data)}
                        >
                          Edit
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() => handleGetId(data.id)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Box>
      </Box>
      <Edit
        id={id}
        isActive={isActive}
        setIsActive={setIsActive}
        open={open}
        onClose={handleClose}
        data={allProductsDetails}
        setState={setAllProductsDetails}
        viewAllProducts={viewAllProducts}
      />
    </>
  );
};

export default View;
