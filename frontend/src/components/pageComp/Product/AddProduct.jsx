import React, { useState } from "react";
import { supabase } from "../../../misc/supabaseClient";
import { Box, Button, TextField, Typography } from "@mui/material";

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
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",

        flexDirection: "column",
        padding: "5em",
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h2" gutterBottom>
        Add new Product
      </Typography>
      <TextField
        id="standard-basic"
        label="Name"
        variant="standard"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
      />
      <TextField
        id="standard-basic"
        label="Description"
        variant="standard"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        fullWidth
      />
      <TextField
        id="standard-basic"
        label="Price"
        variant="standard"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        fullWidth
      />
      <TextField
        id="filled-number"
        label="Number"
        type="number"
        variant="standard"
        value={stock}
        slotProps={{
          inputLabel: {
            shrink: true,
          },
        }}
        onChange={(e) => setStock(e.target.value)}
        fullWidth
      />

      <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2 }}>
        Add
      </Button>
    </Box>
  );
};

export default AddProduct;
