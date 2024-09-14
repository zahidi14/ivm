import React, { useState } from "react";
import { supabase } from "../../../misc/supabaseClient";
import { Box, Button, TextField } from "@mui/material";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [alert, setAlert] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();

    if (!name || !desc || !price || !stock) {
      setAlert("data cannot be empty");
      return;
    }

    const productData = {
      name,
      desc,
      price: parseFloat(price),
      stock: parseInt(stock),
    };
    const { data, error } = await supabase
      .from("products")
      .insert([productData]);

    if (error) {
      setAlert("error add data");
    } else {
      setName("");
      setDesc("");
      setPrice("");
      setStock("");
      setAlert("added successfully");
      console.log("data added", data);
    }
  };
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2 }}>
        Add
      </Button>
    </Box>
  );
};

export default AddProduct;
