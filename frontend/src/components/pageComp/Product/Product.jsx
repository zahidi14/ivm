import { useEffect, useState } from "react";
import { supabase } from "../../misc/supabaseClient";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Alert from "@mui/material/Alert";

const Inventory = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function getProduct() {
      const { data, error } = await supabase.from("products").select("*");
      if (error) {
        console.error("Error fetching products:", error);
      } else {
        console.log("Fetched products:", data);
        setProduct(data);
      }
    }
    getProduct();
  }, []);
  useEffect(() => {
    console.log("Updated product list:", product);
  }, [product]);

  const handleDelete = (id) => {
    console.log(`delete ${id}`);
    return (
      <Alert variant="filled" severity="error">
        This is a filled error Alert.
      </Alert>
    );
  };
  const handleEdit = (id) => {
    console.log(`edit ${id}`);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Stock</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {product.map((prod) => (
            <TableRow
              key={prod.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{prod.name}</TableCell>
              <TableCell align="right">{prod.desc}</TableCell>
              <TableCell align="right">${prod.price}</TableCell>
              <TableCell align="right">{prod.stock}</TableCell>
              <TableCell align="right">
                <IconButton
                  aria-label="delete"
                  color="secondary"
                  onClick={() => handleDelete(prod.id)}
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  aria-label="edit"
                  color="primary"
                  onClick={() => handleEdit(prod.id)}
                >
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Inventory;
