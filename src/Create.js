import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import View from "./View";

const Create = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [check, setCheck] = useState(false);
  const [catagories, setCatagories] = useState([
    "Vegetablesell",
    "Fruits & Nuts",
    "Dairy & creams",
    "Packages Food ",
    "Staples",
  ]);
  const [desc, setDes] = useState("");
  const [TotalValues, setTotalValues] = useState([
    {
      productName: "",
      price: "",
      oldPrice: "",
      isactive: "",
      catagories: "",
      description: "",
    },
  ]);
  const handleSubmit = () => {
    setTotalValues([
      {
        productName: productName,
        price: price,
        oldPrice: oldPrice,
        isactive: check,
        catagories: catagories,
        description: desc,
      },
    ]);
    alert("submited successfully");
  };
  console.log(TotalValues);
  return (
    <>
      <div style={{ padding: "20px" }}>
        <TextField
          label={"productName"}
          size="small"
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <TextField
          type="text"
          size="small"
          label={"price"}
          value={price}
          onChange={(e) =>
            setPrice(e.target.value.replace(/[^0-9]/g, "").slice(0, 10))
          }
        />
        <TextField
          type="text"
          size="small"
          value={oldPrice}
          label="oldPrice"
          onChange={(e) =>
            setOldPrice(e.target.value.replace(/[^0-9]/g, "").slice(0, 10))
          }
        />
        <TextField
          size="small"
          type="checkBox"
          checked={check}
          onChange={(e) => setCheck(check === true ? false : true)}
        />
        <TextField
          type="text"
          value={desc}
          onChange={(e) => setDes(e.target.value)}
          label=" desprition"
          rows={5}
        />

        <FormControl size="small">
          <InputLabel id="demo-simple-select-label">catagories</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={catagories}
            label="catagories"
            onChange={(e) => setCatagories(e.target.value)}
          >
            <MenuItem value={10}>Vegetables</MenuItem>
            <MenuItem value={20}>Fruits & Nutsp</MenuItem>
            <MenuItem value={20}>Dairy & creams</MenuItem>
            <MenuItem value={20}> Packages Food</MenuItem>
            <MenuItem value={20}>Staples</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
        <View TotalValues={TotalValues} />
      </div>
    </>
  );
};

export default Create;
// Product Name (type: string),
// Price(type: number), Old Price(type: number), Category type(type: select),
//  is active(type: checkbox), description(type: textarea)
// Vegetables, Fruits & Nuts, Dairy & creams, Packages Food , Staples
