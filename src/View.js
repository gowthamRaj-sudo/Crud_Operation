import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import Edit from "./Edit";

const View = ({ TotalValues }) => {
  console.log(TotalValues);
  const [editValues, setEditValues] = useState(TotalValues);
  const handleSubmit = () => {
    setEditValues({
      productName: editValues.productName,
      price: editValues.price,
      oldPrice: editValues.oldPrice,
      isactive: editValues.isactive,
      catagories: editValues.catagories,
      description: editValues.description,
    });
  };
  console.log(editValues);
  return (
    <div>
      <table>
        <tr>
          <th>ProductName</th>
          <th>price</th>
          <th>oldPrice</th>
          <th>isActive</th>
          <th>description</th>
          <th>catagories</th>
        </tr>
        <tbody>
          {/* {TotalValues?.map((e) => ( */}
          <tr>
            <td>
              {" "}
              <TextField
                label={"productName"}
                size="small"
                type="text"
                value={editValues.productName}
                onChange={(e) =>
                  setEditValues({
                    ...editValues,
                    productName: e.target.value,
                  })
                }
              />
            </td>
            <td>
              {" "}
              <TextField
                type="text"
                size="small"
                label={"price"}
                value={editValues.price}
                onChange={(e) =>
                  setEditValues({
                    ...editValues,
                    price: e.target.value.replace(/[^0-9]/g, "").slice(0, 10),
                  })
                }
              />
            </td>
            <td>
              {" "}
              <TextField
                type="text"
                size="small"
                value={editValues.oldPrice}
                label="oldPrice"
                onChange={(e) =>
                  setEditValues({
                    ...editValues,
                    oldPrice: e.target.value
                      .replace(/[^0-9]/g, "")
                      .slice(0, 10),
                  })
                }
              />
            </td>
            <td>
              {" "}
              <TextField
                size="small"
                type="checkBox"
                checked={editValues.isactive}
                // onChange={(e) => setEditValues(check === true ? false : true)}
              />
            </td>
            <td>
              {" "}
              <TextField
                type="text"
                value={editValues.description}
                onChange={(e) =>
                  setEditValues({
                    ...editValues,
                    description: e.target.value,
                  })
                }
                label=" desprition"
                rows={5}
              />
            </td>
            <td>
              {" "}
              <FormControl size="small">
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={editValues.catagories}
                  label="catagories"
                  onChange={(e) =>
                    setEditValues({
                      ...editValues,
                      catagories: e.target.value,
                    })
                  }
                >
                  <MenuItem value={10}>Vegetables</MenuItem>
                  <MenuItem value={20}>Fruits & Nutsp</MenuItem>
                  <MenuItem value={20}>Dairy & creams</MenuItem>
                  <MenuItem value={20}> Packages Food</MenuItem>
                  <MenuItem value={20}>Staples</MenuItem>
                </Select>
              </FormControl>
            </td>
            <td>
              <Button variant="contained" onClick={handleSubmit}>
                Update
              </Button>
              {/* <Button variant="contained" onClick={()}>
                Delete
              </Button> */}
            </td>
          </tr>
          {/* ))} */}
        </tbody>
      </table>

      {/* <Edit TotalValues={TotalValues} /> */}
    </div>
  );
};

export default View;
